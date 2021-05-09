const title = document.getElementById('title');
const btnStart = document.getElementById('start');
const quadro = document.getElementById('quadro');
const p1 = document.getElementById('p1');
const h101 = document.querySelector('h1');
const body = document.querySelector('body');
const textInicioMural = '<h1 class="text-mural">Bem-Vinda !!!</h1> <p>Uma surpresinha do seu filho Diogo (futuro programador de softwares).<br><br>Mais a frente teremos algumas surpresas, só tacar o dedo em continuar.<br><br> ;D</p>';
const img01 = '<img class="img-mural" src="/01.jpg" alt="foto_01" height="270px">';
const img02 = '<img class="img-mural" src="/02.jpg" alt="foto_02" height="270px">';
const img03 = '<img class="img-mural" src="/03.jpg" alt="foto_03" height="270px">';
const img04 = '<img class="img-mural" src="/04.jpg" alt="foto_04" height="250px">';
const img05 = '<img class="img-mural" src="/05.jpg" alt="foto_05" height="270px">';
const img06 = '<img class="img-mural" src="/06.jpg" alt="foto_06" height="270px">';
const img07 = '<img class="img-mural" src="/07.jpg" alt="foto_07" height="270px">';
const img08 = '<img class="img-mural" src="/08.jpg" alt="foto_08" height="270px">';
const img09 = '<img class="img-mural" src="/09.jpg" alt="foto_09" height="270px">';
const img10 = '<img class="img-mural" src="/10.jpg" alt="foto_10" height="270px">';
const img11 = '<img class="img-mural" src="/11.jpg" alt="foto_11" height="270px">';
const txt01 = '<p class="txt-mural">"Pra começar vamos voltar um pouquinho talvez uns 9 anos. Não vou voltar muito porque senão isso vira uma biografia. Vamos para uma foto tirada com meu primeiro Smartphone."<br><br>kkkkkk</p>';
const txt02 = '<p class="txt-mural">"Recordar é viver!"<br>"Então que tal uma foto dos churrascos que a senhora já ta cansada de comer. rs<br> Por isso esse ano decidi inovar!"<br><br>Sem mais enrolação continua aew!</p>';
const txt03 = '<p class="txt-mural">"Agora Vamos de foto tirada no parque, só a senhora mesmo pra encarar com a gente aquele Kabum tabajara." rs <br>"Foi muito legal aquele dia! Só vou colocar uma foto pra recordar."<br><br>Pode apertar continue de novo aew!</p>';
const txt04 = '<p class="txt-mural">"Vamos continuando, pois tem mais duas fotos de uns 5 anos atrás." <br><br>APERTA ESSE CONTINUE LOGO MULÉÉÉÉÉR!</p>';
const arrMural = [textInicioMural, txt01, img01, txt02, img02, txt03, img03, txt04, img04, img05, img06, img07, img08, img09, img10, img11]
//
//
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
    if ((document.getElementById('senha').value).length >= 6 && document.getElementById('senha').value !== 'Regina') {
        alert('Digita seu nome. Com a 1ª letra Maiúscula ;)');
    } else if (document.getElementById('senha').value === 'Regina') {
        document.getElementById('senha').remove();
        title.remove();
        quadro.className = 'mural';
        quadro.innerHTML = textInicioMural;
        const btnCont = document.createElement('button');
        btnCont.className = 'continue click'
        btnCont.innerText = 'Continue';
        body.appendChild(btnCont);
        activeContiune(btnCont);
    }        
}
function activeContiune(button) {
    button.addEventListener('click', () => {
        for (let index = 0; index < arrMural.length-1; index += 1) {
            if (quadro.innerHTML === arrMural[arrMural.length - 2]) {
                button.remove();
            } else if (quadro.innerHTML === arrMural[index]) {
                quadro.innerHTML = arrMural[index + 1];
                break;
            }
        }
                    
    });
}