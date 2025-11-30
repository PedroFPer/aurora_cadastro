import validateCpf from "./validateCpf";
import validateEmail from "./validateEmail";
 export default function validateForm(formData) {
  const errors = {};

  if (!formData.name) {
    errors.name = "*Campo Obrigatorio";
  }

  if (!formData.lastName) {
    errors.lastName = "*Campo Obrigatorio";
  }

  if (!formData.cpf) {
    errors.cpf = "*Campo Obrigatorio";
  } else if (!validateCpf(formData.cpf)) {
    errors.cpf = "*CPF inválido.";
  }

  if (!formData.phone) {
    errors.phone = "*Campo Obrigatorio";
  } else if (formData.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "*O telefone deve conter pelo menos 10 caracteres";
  }

  if (!formData.email) {
    errors.email = "*Campo Obrigatorio";
  } else if (!validateEmail(formData.email)) {
    errors.email = "*Formato de email inválido.";
  }

  if (!formData.verifyEmail) {
    errors.verifyEmail = "*Campo Obrigatorio";
  } else if (formData.email !== formData.verifyEmail) {
    errors.verifyEmail = "*Os emails não coincidem.";
  }

  if (!formData.password) {
    errors.password = "*Campo Obrigatorio";
  } else if (formData.password.length < 8) {
    errors.password = "*A senha deve conter pelo menos 8 caracteres.";
  }

  if (!formData.verifyPassword) {
    errors.verifyPassword = "*Campo Obrigatorio";
  } else if (formData.password !== formData.verifyPassword) {
    errors.verifyPassword = "*As senhas não coincidem.";
  }
  return errors;
}
