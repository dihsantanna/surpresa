const title = document.getElementById('title');
const btnStart = document.getElementById('start');
const quadro = document.getElementById('quadro');
const p1 = document.getElementById('p1');
const h101 = document.querySelector('h1');
btnStart.addEventListener('click', () => {
    h101.innerText = '';
    quadro.innerHTML = null;
    p1.innerHTML = 'Digite sua senha de 6 dígitos:';
    const input = document.createElement('input');
    input.id = 'senha';
    input.classList.add('click');
    quadro.appendChild(input);
    const place = document.createAttribute('placeholder');
    place.value = 'Que tal o seu primeiro nome! ;D';
    input.setAttributeNode(place);
})

document.oninput = function() {
    if (document.getElementById('senha').value === 'Regina') {
        document.getElementById('senha').remove();
        title.remove()
        quadro.className = 'mural';
        quadro.innerHTML = textDoMural01;
    }
    if ((document.getElementById('senha').value).length >= 6) {
        alert('Digita seu nome. Com a 1ª letra Maiúscula ;)');
    }
}

const textDoMural01 = '<h1 class="text-mural">Bem-Vinda Mãe !!!</h1>';