document.addEventListener("DOMContentLoaded", function() {
    const btnClick = document.getElementById("butcont");
    const contador = document.getElementById("contador");
    let count = 0;
    btnClick.addEventListener("click", function() {
        count++;
        contador.textContent = "Número de cliques: " + count;
    });
});