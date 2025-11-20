// CRIA PARTÍCULAS DOURADAS ESTILO "GRAÇA"

const container = document.getElementById("particles");

function criarParticula() {
  const part = document.createElement("div");
  part.classList.add("particula");

  const size = Math.random() * 8 + 3;
  part.style.width = size + "px";
  part.style.height = size + "px";

  part.style.position = "absolute";
  part.style.background = "rgba(230,210,130,.9)";
  part.style.borderRadius = "50%";

  part.style.left = Math.random() * window.innerWidth + "px";
  part.style.top = window.innerHeight + "px";

  container.appendChild(part);

  const duracao = Math.random() * 4 + 3;

  part.animate(
    [
      { transform: `translateY(0px)`, opacity: 1 },
      { transform: `translateY(-${window.innerHeight + 200}px)`, opacity: 0 }
    ],
    {
      duration: duracao * 1000,
      easing: "linear"
    }
  );

  setTimeout(() => part.remove(), duracao * 1000);
}

setInterval(criarParticula, 120);
