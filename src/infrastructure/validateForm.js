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
  } else if (formData.cpf.replace(/\D/g, "").length !== 11) {
    errors.cpf = "*O CPF deve conter 11 números.";
  }

  if (!formData.phone) {
    errors.phone = "*Campo Obrigatorio";
  } else if (formData.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "*O telefone deve conter pelo menos 10 caracteres";
  }

  if (!formData.email) {
    errors.email = "*Campo Obrigatorio";
  }

  if (!formData.verifyEmail) {
    errors.verifyEmail = "*Campo Obrigatorio";
  } else if (formData.email !== formData.verifyEmail) {
    errors.verifyEmail = "*Os emails não coincidem.";
  }

  if (!formData.password) {
    errors.password = "*Campo Obrigatorio";
  } else if (formData.password.length < 6) {
    errors.password = "*A senha deve conter pelo menos 6 caracteres.";
  }

  if (!formData.verifyPassword) {
    errors.verifyPassword = "*Campo Obrigatorio";
  } else if (formData.password !== formData.verifyPassword) {
    errors.verifyPassword = "*As senhas não coincidem.";
  }

  return errors;
}
