export function formatInput(value, type) {
  let onlyNumbers = value.replace(/\D/g, "");

  if (type === "cpf") {
    onlyNumbers = onlyNumbers.slice(0, 11); 
    onlyNumbers = onlyNumbers.replace(/(\d{3})(\d)/, "$1.$2");
    onlyNumbers = onlyNumbers.replace(/(\d{3})(\d)/, "$1.$2");
    onlyNumbers = onlyNumbers.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  if (type === "phone") {
    onlyNumbers = onlyNumbers.slice(0, 11); 
    onlyNumbers = onlyNumbers.replace(/^(\d{2})(\d)/, "($1) $2");
    onlyNumbers = onlyNumbers.replace(/(\d{5})(\d)/, "$1-$2");
  }

  return onlyNumbers;
}