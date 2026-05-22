

const formulario = document.getElementById("contactForm");

if(formulario){

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        // CAMPOS
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // VALIDACION EMAIL
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // VALIDACIONES
        if(nombre === ""){
            alert("El nombre es obligatorio");
            return;
        }

        if(!emailValido.test(correo)){
            alert("Ingresa un correo válido");
            return;
        }

        if(mensaje.length < 10){
            alert("El mensaje debe tener mínimo 10 caracteres");
            return;
        }

        // MENSAJE EXITOSO
        alert("Mensaje enviado correctamente");

        // LIMPIAR FORMULARIO
        formulario.reset();

    });

}




const header = document.getElementById("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){
        header.style.background = "rgba(5,8,22,0.98)";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    }else{
        header.style.background = "rgba(10,15,44,0.95)";
        header.style.boxShadow = "none";
    }

});



const cards = document.querySelectorAll(".title-card, .player-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});



const themeToggle = document.getElementById("theme-toggle");

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = '<i class="ri-sun-line"></i>';
        }else{
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = '<i class="ri-moon-line"></i>';
        }

    });


    if(localStorage.getItem("theme") === "light"){
        document.body.classList.add("light-mode");
        themeToggle.innerHTML = '<i class="ri-sun-line"></i>';
    }

}