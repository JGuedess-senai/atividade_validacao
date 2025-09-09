function validacampos() {
   const cpfRegex = /^\d{1,11}$/;
   const nomeRegex = /^[a-zA-Z\s]+$/;

   const cpf = document.getElementById("cpf").value;
   const nome = document.getElementById("nome").value;

   if (!cpfRegex.test(cpf)) {
    alert("CPf inválido.");
    return false;
   }
   if (!nomeRegex.test(nome)) {
    alert("Nome inválido.");
    return false;
   }
   
   return true;
}