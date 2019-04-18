// let corpo = document.querySelector("body");
// let texto = document.querySelector("p");
// let botao = document.querySelector(".feliz");
// let botao2 = document.querySelector(".triste");
// let imagem = document.querySelector("img");

// botao.onclick = deixarFeliz;
// botao2.onclick = deixarTriste;

// function deixarFeliz(){
//     corpo.style.backgroundColor = "yellow";
//     texto.innerHTML = "Ana fica feliz ao ganhar chocolate.";
//     imagem.src = "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face.png";
// }

// function deixarTriste(){
//     corpo.style.backgroundColor = "gray";
//     texto.innerHTML = "Ana está triste pois os belos não lembram da matéria de domingo.";
//     imagem.src =  "https://cdn.shopify.com/s/files/1/1061/1924/products/Sad_Face_Emoji_large.png?v=1480481055";
// }


// let corpo = document.querySelector("body");
// let botao = document.querySelector("button");
// let popup = document.querySelector("div");
// let imagem = document.querySelector("img");

// function numeroAleatorio1(a, b) {
//     return Math.random() * (a - b) + min;
//   }

// function numeroAleatorio2(a, b) {
//     return Math.random() * (a - b) + min;
// }




// function abrirPopup(){
//     popup.classList.toggle("aparecerPopup");
//     imagem.src="https://www.placecage.com/c/"+numeroAleatorio1(0, 200)+"/"+numeroAleatorio2(0,200);
// }

// botao.onclick = abrirPopup;


let menuHmb = document.querySelector(".containerHmb");
let menuDiv = document.querySelector(".menu");

function transicao(){
    menuDiv.classList.toggle("transition");
}

menuHmb.onclick = transicao;