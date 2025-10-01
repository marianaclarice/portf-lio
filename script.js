document.querySelectorAll(".categoria").forEach(cat => {
    cat.addEventListener("click", () => {
        const modalId = cat.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.style.display = "flex";
    });
});

document.querySelectorAll(".modal .close").forEach(btn => {
    btn.addEventListener("click", e => {
        e.target.closest(".modal").style.display = "none";
    });
});

document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", e => {
        if(e.target === modal) {
            modal.style.display = "none";
        }
    });
});
