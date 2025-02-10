const No = document.getElementById("no"); 
const altura = 450; 
const largura = 400 ;
const musga = document.getElementById("musica");
const Si = document.getElementById("Si");
const h1 = document.getElementById("Texto");
const posicaoh1 = h1.getBoundingClientRect();
const posicaosi = Si.getBoundingClientRect();
const posicaono = No.getBoundingClientRect();
console.log(posicaoh1,);
console.log(posicaosi, posicaosi);

function alturaNo() {
    return Math.random() * altura;
}

function larguraNo() {
    return Math.random() * largura;
}

No.addEventListener("mouseover", function () {
    const x = larguraNo();
    const y = alturaNo();

    if (x == posicaoh1 && y == posicaoh1 || x == posicaosi && y == posicaosi) {
    No.style.top = x + "px";
    No.style.left = y + "px";
    No.style.position = "absolute";
    }
}); 

console.log(x == posicaoh1)


No.addEventListener("click", function () { 
    No.style.position = "absolute"; 
    No.style.top = Math.random() * altura + "px"; 
    No.style.left = Math.random() * largura + "px"; 
}) 



 Si.addEventListener("click", function() { 
    window.location.href="https://www.instagram.com/jeanzinhow_1702";
})

window.addEventListener('DOMContentLoaded', function() {
    if (musga) {
        musga.play().then(() => {
            console.log('Reprodução automática iniciada com sucesso.');
        }).catch((error) => {
            console.error('Reprodução automática foi bloqueada.', error);
        });
    }
});


