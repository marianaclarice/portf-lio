document.querySelectorAll(".slideshow").forEach(slideshow => {
    const imgs = slideshow.querySelectorAll("img");
    let index = 0, interval;

  // mostra só a primeira imagem no carregamento
    imgs.forEach((img, i) => img.classList.toggle("active", i === 0));

    slideshow.addEventListener("mouseenter", () => {
    interval = setInterval(() => {
        imgs[index].classList.remove("active");
        index = (index + 1) % imgs.length;
        imgs[index].classList.add("active");
    }, 1000); // troca a cada 1s
    });

    slideshow.addEventListener("mouseleave", () => {
    clearInterval(interval);
    imgs.forEach((img, i) => img.classList.toggle("active", i === 0));
    index = 0;
    });
});