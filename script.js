// =====================================
// BOTÃO "CONHECER PROJETOS"
// =====================================

const botaoProjetos = document.getElementById("btnProjetos");

botaoProjetos.addEventListener("click", () => {

    document.getElementById("projetos").scrollIntoView({
        behavior: "smooth"
    });

});


// =====================================
// NAVBAR AO ROLAR
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,70,35,.95)";
        header.style.padding = "14px 8%";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(0,90,50,.75)";
        header.style.padding = "18px 8%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }

});


// =====================================
// ANIMAÇÃO DOS CARDS
// =====================================

const elementos = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .15
});

elementos.forEach((el) => observer.observe(el));


// =====================================
// MODAL
// =====================================

const modal = document.getElementById("modal");

const modalTitulo = document.getElementById("modalTitulo");

const modalDescricao = document.getElementById("modalDescricao");

const modalImagem = document.getElementById("modalImagem");

const fechar = document.getElementById("fechar");

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("click", () => {

        modalTitulo.innerText = card.dataset.titulo;

        modalDescricao.innerText = card.dataset.descricao;

        modalImagem.src = card.dataset.imagem;

        modal.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});


// =====================================
// FECHAR NO X
// =====================================

fechar.addEventListener("click", fecharModal);


// =====================================
// FECHAR CLICANDO FORA
// =====================================

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        fecharModal();

    }

});


// =====================================
// FECHAR COM ESC
// =====================================

window.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        fecharModal();

    }

});


// =====================================
// FUNÇÃO FECHAR MODAL
// =====================================

function fecharModal() {

    modal.style.display = "none";

    document.body.style.overflow = "auto";

}


// =====================================
// EFEITO DE INCLINAÇÃO NOS CARDS
// =====================================

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;

        const rotateX = ((y / rect.height) - 0.5) * -10;

        card.style.transform =
            `perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.04)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});


// =====================================
// EFEITO DE DIGITAÇÃO
// =====================================

const tituloHero = document.querySelector(".hero h1");

const textoOriginal = tituloHero.textContent;

tituloHero.textContent = "";

let indice = 0;

function escreverTitulo() {

    if (indice < textoOriginal.length) {

        tituloHero.textContent += textoOriginal.charAt(indice);

        indice++;

        setTimeout(escreverTitulo, 70);

    }

}

window.addEventListener("load", escreverTitulo);


// =====================================
// ANIMAÇÃO DO HERO
// =====================================

const hero = document.querySelector(".hero-content");

window.addEventListener("load", () => {

    hero.style.opacity = "0";

    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition = "1s";

        hero.style.opacity = "1";

        hero.style.transform = "translateY(0)";

    }, 200);

});


// =====================================
// DESTACA LINK DA NAVBAR
// =====================================

const secoes = document.querySelectorAll("section");

const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let atual = "";

    secoes.forEach((secao) => {

        const topo = secao.offsetTop - 120;

        if (pageYOffset >= topo) {

            atual = secao.getAttribute("id");

        }

    });

    links.forEach((link) => {

        link.classList.remove("ativo");

        if (link.getAttribute("href") === "#" + atual) {

            link.classList.add("ativo");

        }

    });

});