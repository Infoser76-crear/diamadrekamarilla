const select = document.getElementById('nombre');
const mensaje = document.getElementById('mainMessage');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const body = document.body;
const cover = document.getElementById('cover');
const containerLetter = document.querySelector('.container-letter');

const saludos = {
  'Ysela': 'Querida Ahijada  Ysela',
  'Yasi': 'Querida Ahijada Yasi',
  'Grecia': 'Querida Grecia',
};

select.addEventListener('change', () => {
  const nombre = select.value;

  if (saludos[nombre]) {
    openBtn.disabled = false;

    const fondos = {
      'Ysela': 'linear-gradient(to bottom, #ffe6e6, #ffb3b3)',
      'Yasi': 'linear-gradient(to bottom, #e6f7ff, #b3ecff)',
      'Grecia': 'linear-gradient(to bottom, #ffe6e6, #ffb3b3)',
     
    };

    body.style.background = fondos[nombre] || '#ffe4ec';

    mensaje.innerHTML = `
      ${saludos[nombre]},<br><br>
      "Hoy celebro tu amor transformador, ese que con manos de alma teje los hilos invisibles de nuestra familia. En ti late la fuerza que nutre, el cuidado que sana y la alegría que convierte lo simple en eterno."
      Feliz dia de la Madre.

      De parte de Roberto.
    `;
  } else {
    mensaje.innerHTML = `
      "Hoy celebro tu amor transformador, ese que con manos de alma teje los hilos invisibles de nuestra familia. En ti late la fuerza que nutre, el cuidado que sana y la alegría que convierte lo simple en eterno."
      Feliz dia de la Madre.

      De parte de Roberto.
    `;
    openBtn.disabled = true;
    body.style.background = '#ffe4ec';
  }
});

openBtn.addEventListener('click', () => {
  cover.classList.add('opened');
  containerLetter.classList.add('opened'); // Aquí para mostrar el mensaje
  openBtn.disabled = true;
  closeBtn.disabled = false;
  select.disabled = true;
});

closeBtn.addEventListener('click', () => {
  cover.classList.remove('opened');
  containerLetter.classList.remove('opened'); // Aquí para ocultar el mensaje
  closeBtn.disabled = true;
  select.disabled = false;

  if (select.value) {
    openBtn.disabled = false;
  }
});
