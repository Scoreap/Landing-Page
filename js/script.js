/* ==========================================================
   HU5 · VISTA AMPLIADA DE INTEGRANTES
   ========================================================== */


document.addEventListener("DOMContentLoaded", () => {

    const integrantes = document.querySelectorAll(".integrante");


    /* ------------------------------------------------------
       Descripción de los roles
       No se agregan datos personales inventados.
       ------------------------------------------------------ */

    const descripciones = {

        "Desarrollador Frontend":
            "Encargado del desarrollo de la interfaz visual y de convertir el diseño de la página en una experiencia funcional para el usuario.",

        "Desarrollador Backend":
            "Responsable de la lógica y los componentes internos que permiten que una aplicación gestione información y funcionalidades.",

        "Diseñador UI/UX":
            "Responsable de diseñar interfaces claras, consistentes y fáciles de utilizar, procurando una buena experiencia para el usuario.",

        "QA Tester":
            "Responsable de revisar el funcionamiento del proyecto, identificar posibles errores y comprobar que la experiencia final cumpla con los requisitos establecidos.",

        "Project Manager":
            "Responsable de organizar y coordinar el trabajo del equipo, dando seguimiento a las tareas y objetivos del proyecto."
    };


    /* ------------------------------------------------------
       Crear modal
       ------------------------------------------------------ */

    const modal = document.createElement("dialog");

    modal.classList.add("integrante-modal");

    modal.setAttribute(
        "aria-labelledby",
        "modal-integrante-nombre"
    );


    modal.innerHTML = `
        <div class="integrante-modal__contenido">

            <button
                class="integrante-modal__cerrar"
                type="button"
                aria-label="Cerrar información del integrante"
            >
                ×
            </button>

            <img
                class="integrante-modal__imagen"
                src=""
                alt=""
            >

            <div class="integrante-modal__informacion">

                <p class="integrante-modal__etiqueta">
                    Integrante del equipo
                </p>

                <h3
                    class="integrante-modal__nombre"
                    id="modal-integrante-nombre"
                ></h3>

                <p class="integrante-modal__rol"></p>

                <hr class="integrante-modal__linea">

                <p class="integrante-modal__descripcion"></p>

            </div>

        </div>
    `;


    document.body.appendChild(modal);


    /* ------------------------------------------------------
       Elementos del modal
       ------------------------------------------------------ */

    const imagenModal =
        modal.querySelector(".integrante-modal__imagen");

    const nombreModal =
        modal.querySelector(".integrante-modal__nombre");

    const rolModal =
        modal.querySelector(".integrante-modal__rol");

    const descripcionModal =
        modal.querySelector(".integrante-modal__descripcion");

    const botonCerrar =
        modal.querySelector(".integrante-modal__cerrar");


    /* ------------------------------------------------------
       Abrir integrante
       ------------------------------------------------------ */

    function abrirIntegrante(integrante) {

        const imagen =
            integrante.querySelector(".integrante__foto");

        const nombre =
            integrante.querySelector(".integrante__nombre");

        const rol =
            integrante.querySelector(".integrante__rol");


        imagenModal.src = imagen.src;

        imagenModal.alt =
            `Fotografía ampliada de ${nombre.textContent}`;


        nombreModal.textContent =
            nombre.textContent;


        rolModal.textContent =
            rol.textContent;


        descripcionModal.textContent =
            descripciones[rol.textContent.trim()] ??
            "Integrante del equipo de desarrollo del proyecto.";


        modal.showModal();
    }


    /* ------------------------------------------------------
       Convertir las tarjetas en elementos interactivos
       ------------------------------------------------------ */

    integrantes.forEach((integrante) => {

        integrante.setAttribute(
            "tabindex",
            "0"
        );


        integrante.setAttribute(
            "role",
            "button"
        );


        const nombre =
            integrante.querySelector(
                ".integrante__nombre"
            ).textContent;


        integrante.setAttribute(
            "aria-label",
            `Ver información de ${nombre}`
        );


        /* Click */

        integrante.addEventListener(
            "click",
            () => abrirIntegrante(integrante)
        );


        /* Teclado */

        integrante.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    abrirIntegrante(integrante);
                }
            }
        );
    });


    /* ------------------------------------------------------
       Cerrar con botón
       ------------------------------------------------------ */

    botonCerrar.addEventListener(
        "click",
        () => modal.close()
    );


    /* ------------------------------------------------------
       Cerrar haciendo click fuera de la tarjeta grande
       ------------------------------------------------------ */

    modal.addEventListener(
        "click",
        (event) => {

            if (event.target === modal) {
                modal.close();
            }
        }
    );

});