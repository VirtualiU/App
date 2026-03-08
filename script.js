const form = document.getElementById('ticketForm');
const message = document.getElementById('formMessage');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    message.textContent = 'Por favor, preencha todos os campos obrigatórios.';
    message.style.color = '#b42318';
    return;
  }

  const data = new FormData(form);
  const requester = data.get('nome');

  message.textContent = `Solicitação enviada com sucesso, ${requester}. Em breve retornaremos.`;
  message.style.color = '#0a7a22';
  form.reset();
});
