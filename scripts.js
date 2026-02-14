console.log ("hola desde mi archivo js")


setInterval (() => {
    const hora = new Date().toLocaleTimeString();
    document.getElementById("reloj").textContent = hora;
}, 1000);

document.addEventListener("DOMContentLoaded", function() {

    let claro_button = document.getElementById("tema_Change");


    let temaActual = localStorage.getItem("tema");
    
    if (temaActual === "oscuro") {
        document.body.classList.add("oscuro");
        document.body.classList.remove("claro");
    } else if (temaActual === "claro") {
        document.body.classList.add("claro");
        document.body.classList.remove("oscuro");
    }

    claro_button.addEventListener("click", function() {
        let temaActual = localStorage.getItem("tema");
        if (temaActual === "oscuro") {
            document.body.classList.remove("oscuro");
            document.body.classList.add("claro");
            localStorage.setItem("tema", "claro");
            btn.classList.add("right"); // pelota a la derecha
        } else {
            document.body.classList.remove("claro");
            document.body.classList.add("oscuro");
            localStorage.setItem("tema", "oscuro");
            btn.classList.remove("right"); // pelota a la izquierda
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("tema_Change");
    btn.addEventListener('click', () => {
    // Leer el tema actual
    let temaActual = localStorage.getItem("tema");
    
    let estado = ["claro", "oscuro"];
    if (temaActual === "oscuro") {
        estado = 0;
    } else {
        estado = 1;
    }

    if (estado === 0) {
        // Cambiar a oscuro
        btn.classList.remove("right"); // pelota a la izquierda
        console.log("cambio a oscuro");
    } else {
        // Cambiar a claro
        btn.classList.add("right"); // pelota a la derecha
        console.log("cambio a claro");
    }
}); });







