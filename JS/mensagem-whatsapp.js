// Função para enviar a mensagem do WhatsApp
function sendWhatsAppMessage() {
    // Declaranando as variáveis e puxando seus valores
    const nome = document.getElementById('nome').value; // Obtém o nome do usuario   
    const email = document.getElementById('email').value; // Obtém o valor do campo de rua
    const numero_telefone = document.getElementById('numero-telefone').value; // Obtém o valor do campo de número
    const mensagem_usuario = document.getElementById('mensagem-usuario').value; // Obtém o valor do campo da menssagem do usuario

    // let message = `Olá, sou ${nome}. ${mensagem_usuario}. \nMeu telefone: ${numero_telefone}. \nMeu e-mail: ${email}`;
    // message += ':\n\n'; // Monta a mensagem do usuário

    // const whatsappLink = `https://wa.me/5561995955370?text=$`,{encodeURIComponent(message)};
    // window.open(whatsappLink, '_blank');

    // Número do whatsapp aqui 

    var telefone = "+5561981690169";

    var url = "https://wa.me/" + telefone + "?text=" // Seu numero
    + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Nome*: " + nome + "%0a" // Dados do formulário
    + "*Telefone*: " + numero_telefone + "%0a"
    + "*E-mail*: " + email + "%0a"
    + "*Mensagem*: " + mensagem_usuario + "%0a";
    window.open(url, '_blank').focus();
 }

// Função para validar os campos obrigatórios e enviar o pedido
function validateFieldsAndSend() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const numero_telefone = document.getElementById('numero-telefone').value;
    const mensagem_usuario = document.getElementById('mensagem-usuario').value;

    if (!nome || !email || !numero_telefone || !mensagem_usuario) {
        alert("Por favor, preencha todos os campos obrigatórios antes de enviar o pedido.");
        return;
    }

    sendWhatsAppMessage();
}