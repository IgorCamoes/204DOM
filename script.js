let corpo = document.querySelector("body");
let texto = document.querySelector("p");
let botao = document.querySelector(".feliz");
let botao2 = document.querySelector(".triste");
let imagem = document.querySelector("img");

botao.onclick = deixarFeliz;
botao2.onclick = deixarTriste;

function deixarFeliz(){
    corpo.style.backgroundColor = "yellow";
    texto.innerHTML = "Ana fica feliz ao ganhar chocolate.";
    imagem.src = "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face.png";
}

function deixarTriste(){
    corpo.style.backgroundColor = "gray";
    texto.innerHTML = "Ana está triste pois os belos não lembram da matéria de domingo.";
    imagem.src =  "https://cdn.shopify.com/s/files/1/1061/1924/products/Sad_Face_Emoji_large.png?v=1480481055";
}
