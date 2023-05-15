const BottonAlterarTema = document.getElementById("alterar-tema");

const body = document.querySelector("body");

const ImageBottonTrocaDeTema = document.querySelector(".Image-button");


BottonAlterarTema.addEventListener("click", () => {
    const ModoEscuroAtivo = body.classList.contains("modo-escuro");

    if (ModoEscuroAtivo) {
        body.classList.remove("modo-escuro");
        ImageBottonTrocaDeTema.setAttribute("src", "./src/img/sun.png");
    }
    else {
        body.classList.add("modo-escuro");
        ImageBottonTrocaDeTema.setAttribute("src", "./src/img/moon.png");
    }

})