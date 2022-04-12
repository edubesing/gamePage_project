const validator = require("validator");

const validarFormularioCadastro = payload => {
  const errors = {};
  let message = "";
  let isFormValid = true;

  if (!payload || payload.nome.length === 0) {
    isFormValid = false;
    errors.username = "Coloque o seu nome";
  }

  if (!payload || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = "Por favor insira um email válido";
  }

  if (!payload || payload.senha.trim().length < 8) {
    isFormValid = false;
    errors.password = "Senha deve ter mais que 8 caracteres";
  }

  if (!payload || payload.pwconfirm !== payload.senha) {
    isFormValid = false;
    errors.pwconfirm = "As senhas não são iguais";
  }

  if (!isFormValid) {
    message = "Confira o formulário de cadastro.";
  }

  return {
    success: isFormValid,
    message,
    errors
  };
};

const validarFormularioLogin = payload => {
  const errors = {};
  let message = "";
  let isFormValid = true;

  if (!payload || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = "Insira sua senha.";
  }

  if (!isFormValid) {
    message = "Confira o formulário de login";
  }

  return {
    success: isFormValid,
    message,
    errors
  };
};

module.exports = {
  validarFormularioLogin: validarFormularioLogin,
  validarFormularioCadastro: validarFormularioCadastro
};
