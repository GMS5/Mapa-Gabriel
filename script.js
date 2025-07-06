document.getElementById('formContato').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const resultado = document.getElementById('resultado');

  if (nome === '' || email === '' || mensagem === '') {
    resultado.textContent = 'Por favor, preencha todos os campos.';
    resultado.style.color = 'red';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    resultado.textContent = 'Por favor, insira um email válido.';
    resultado.style.color = 'red';
    return;
  }

  resultado.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
  resultado.style.color = 'green';

  this.reset();
});


document.getElementById('formContato').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const resultado = document.getElementById('resultado');

  if (nome === '' || email === '' || mensagem === '') {
    resultado.textContent = 'Por favor, preencha todos os campos.';
    resultado.style.color = 'red';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    resultado.textContent = 'Por favor, insira um email válido.';
    resultado.style.color = 'red';
    return;
  }

  resultado.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
  resultado.style.color = 'green';

  this.reset();
});
