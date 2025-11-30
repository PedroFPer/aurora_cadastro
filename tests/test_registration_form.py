import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

BASE_URL = "http://localhost:5173"

@pytest.fixture(scope="module")
def driver():
    service = ChromeService(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service)
    driver.get(BASE_URL)
    driver.implicitly_wait(5)
    yield driver
    driver.quit()

def clear_form(driver):
    inputs = driver.find_elements(By.CSS_SELECTOR, "form#registrationForm input")
    for input_element in inputs:
        driver.execute_script("arguments[0].value = '';", input_element)
    driver.find_element(By.TAG_NAME, "body").click()
    time.sleep(0.5)

def fill_form_fields(driver, data):
    for field_id, value in data.items():
        element = driver.find_element(By.ID, field_id)
        if value is not None:
            element.send_keys(value)

def submit_form(driver):
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
    time.sleep(0.5)

def assert_form_is_reset(driver):
    time.sleep(1)
    name_field_after_submit = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.ID, "inputName"))
    )
    assert name_field_after_submit.get_attribute("value") == "", "Formulário não foi resetado após envio válido"

def test_password_length(driver):
    clear_form(driver)
    form_data = {
        "inputName": "Teste", "inputLastName": "Senha", "inputCpf": "13875439857",
        "inputPhone": "11987654321", "inputEmail": "senha@teste.com", "inputVerifyEmail": "senha@teste.com",
        "inputPassword": "1234567", "inputVerifyPassword": "1234567"
    }
    fill_form_fields(driver, form_data)
    submit_form(driver)

    error_message = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id='inputPassword']/../following-sibling::div[@class='error']"))
    ).text
    assert error_message == "*A senha deve conter pelo menos 8 caracteres."

    password_input = driver.find_element(By.ID, "inputPassword")
    password_input.clear()
    password_input.send_keys("12345678")
    driver.find_element(By.ID, "inputVerifyPassword").clear()
    driver.find_element(By.ID, "inputVerifyPassword").send_keys("12345678")
    submit_form(driver)
    assert_form_is_reset(driver)

def test_phone_validation(driver):
    clear_form(driver)
    form_data = {
        "inputName": "Teste", "inputLastName": "Telefone", "inputCpf": "13875439857",
        "inputEmail": "telefone@teste.com", "inputVerifyEmail": "telefone@teste.com",
        "inputPassword": "senha1234", "inputVerifyPassword": "senha1234", "inputPhone": "111234567"
    }
    fill_form_fields(driver, form_data)
    submit_form(driver)

    error_message = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id='inputPhone']/following-sibling::div[@class='error']"))
    ).text
    assert error_message == "*O telefone deve conter pelo menos 10 caracteres"

    phone_input = driver.find_element(By.ID, "inputPhone")
    phone_input.clear()
    phone_input.send_keys("(11) 91234-5678")
    submit_form(driver)
    assert_form_is_reset(driver)

def test_cpf_validation(driver):
    clear_form(driver)
    form_data = {
        "inputName": "Teste", "inputLastName": "CPF", "inputPhone": "11987654321",
        "inputEmail": "cpf@teste.com", "inputVerifyEmail": "cpf@teste.com",
        "inputPassword": "senha1234", "inputVerifyPassword": "senha1234", "inputCpf": "123.456.789-00"
    }
    fill_form_fields(driver, form_data)
    submit_form(driver)

    error_message = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id='inputCpf']/following-sibling::div[@class='error']"))
    ).text
    assert error_message == "*CPF inválido."

    driver.find_element(By.ID, "inputCpf").clear()
    driver.find_element(By.ID, "inputCpf").send_keys("138.754.398-57")
    submit_form(driver)
    assert_form_is_reset(driver)

def test_email_validation(driver):
    clear_form(driver)
    form_data = {
        "inputName": "Teste", "inputLastName": "Email", "inputCpf": "13875439857",
        "inputPhone": "11987654321", "inputPassword": "senha1234", "inputVerifyPassword": "senha1234",
        "inputEmail": "teste@exemplo@com", "inputVerifyEmail": "teste@exemplo@com"
    }
    fill_form_fields(driver, form_data)
    submit_form(driver)

    error_message = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id='inputEmail']/following-sibling::div[@class='error']"))
    ).text
    assert error_message == "*Formato de email inválido."

    driver.find_element(By.ID, "inputEmail").clear()
    driver.find_element(By.ID, "inputVerifyEmail").clear()
    driver.find_element(By.ID, "inputEmail").send_keys("teste@exemplo.com")
    driver.find_element(By.ID, "inputVerifyEmail").send_keys("teste@exemplo.com")
    submit_form(driver)
    assert_form_is_reset(driver)

def test_email_and_password_confirmation(driver):
    clear_form(driver)
    form_data = {
        "inputName": "Teste", "inputLastName": "Confirmacao", "inputCpf": "13875439857",
        "inputPhone": "11987654321", "inputEmail": "teste@exemplo.com", "inputVerifyEmail": "diferente@exemplo.com",
        "inputPassword": "Senha123", "inputVerifyPassword": "Senha123"
    }
    fill_form_fields(driver, form_data)
    submit_form(driver)

    email_error = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id='inputVerifyEmail']/following-sibling::div[@class='error']"))
    ).text
    assert email_error == "*Os emails não coincidem."

    driver.find_element(By.ID, "inputEmail").clear()
    driver.find_element(By.ID, "inputVerifyEmail").clear()
    driver.find_element(By.ID, "inputEmail").send_keys("teste@exemplo.com")
    driver.find_element(By.ID, "inputVerifyEmail").send_keys("teste@exemplo.com")

    driver.find_element(By.ID, "inputPassword").send_keys("Senha123")
    driver.find_element(By.ID, "inputVerifyPassword").clear()
    driver.find_element(By.ID, "inputVerifyPassword").send_keys("Senha456")
    submit_form(driver)

    password_error = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id='inputVerifyPassword']/../following-sibling::div[@class='error']"))
    ).text
    assert password_error == "*As senhas não coincidem."