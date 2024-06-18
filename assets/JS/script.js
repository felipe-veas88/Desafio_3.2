document.addEventListener("DOMContentLoaded", function () {
  const verificarBtn = document.getElementById("verificarBtn");
  const cantidadInputs = document.querySelectorAll(".cantidad");
  const totalStickersElement = document.querySelector(".totalStickers");
  const modal = document.getElementById("myModal");
  const modalClose = document.querySelector(".modal .close");

  // Función para mostrar el modal
  function mostrarModal() {
    modal.style.display = "block";
  }

  // Función para cerrar el modal
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Cierra el modal si se hace clic fuera de él
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // Función para actualizar el total de stickers y verificar el límite
  function actualizarTotalStickers() {
    let totalStickers = 0;
    cantidadInputs.forEach((input) => {
      totalStickers += parseInt(input.value, 10);
    });

    totalStickersElement.textContent = totalStickers;

    // Habilita o deshabilita el botón según el total de stickers
    if (totalStickers > 0 && totalStickers <= 10) {
      verificarBtn.disabled = false;
    } else {
      verificarBtn.disabled = true;
      if (totalStickers > 10) {
        mostrarModal();
      }
    }
  }

  // Agrega un evento de cambio a cada campo de entrada
  cantidadInputs.forEach((input) => {
    input.addEventListener("input", actualizarTotalStickers);
  });

  // Evento para redirigir a password.html cuando se hace clic en el botón
  verificarBtn.addEventListener("click", function () {
    window.location.href = "password.html";
  });

  // Inicializa el estado del botón en caso de que haya valores predeterminados en los campos de entrada
  actualizarTotalStickers();
});

document.addEventListener("DOMContentLoaded", function () {
  const verificarBtn = document.querySelector(".cupon-container .btn");
  const cuponImg = document.querySelector(".cupon");

  // Función para alternar la clase 'active' y actualizar estado del botón
  function toggleBorder() {
    cuponImg.classList.toggle("active");

    // Verificar si la imagen tiene la clase 'active' y actualizar el botón
    if (cuponImg.classList.contains("active")) {
      verificarBtn.disabled = false;
    } else {
      verificarBtn.disabled = true;
    }
  }

  // Función para redirigir a stickers.html cuando se activa el botón
  function redirectToStickers() {
    window.location.href = "assets/HTML/stickers.html";
  }

  // Agregar evento de click a la imagen cupon
  cuponImg.addEventListener("click", toggleBorder);

  // Agregar evento de click al botón verificarBtn
  verificarBtn.addEventListener("click", function () {
    if (cuponImg.classList.contains("active")) {
      redirectToStickers();
    }
  });

  // Mostrar modal al cargar la página
  const reminderModal = document.createElement("div");
  reminderModal.style.display = "block";
  reminderModal.style.position = "fixed";
  reminderModal.style.zIndex = "1000";
  reminderModal.style.left = "50%";
  reminderModal.style.top = "50%";
  reminderModal.style.transform = "translate(-50%, -50%)";
  reminderModal.style.padding = "20px";
  reminderModal.style.backgroundColor = "white";
  reminderModal.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  reminderModal.innerHTML = `
    <p>Recuerda que debes activar tu cupón clickeando sobre él</p>
    <button id="reminderCloseBtn">Cerrar</button>
  `;
  document.body.appendChild(reminderModal);

  // Cerrar el modal de recordatorio
  document
    .getElementById("reminderCloseBtn")
    .addEventListener("click", function () {
      reminderModal.style.display = "none";
    });
});

/*---------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar los elementos relevantes del DOM
  const char1SelectA = document.getElementById("char1a");
  const char2SelectA = document.getElementById("char2a");
  const char3SelectA = document.getElementById("char3a");
  const verificarBtnA = document.getElementById("verificarBtnA");
  const password1Message = document.getElementById("password1Message");

  const char1SelectB = document.getElementById("char1b");
  const char2SelectB = document.getElementById("char2b");
  const char3SelectB = document.getElementById("char3b");
  const obtenerBtnB = document.getElementById("obtenerBtnB");
  const password2Message = document.getElementById("password2Message");

  // Función para verificar el primer password
  function verificarPassword1() {
    const char1Value = char1SelectA.value;
    const char2Value = char2SelectA.value;
    const char3Value = char3SelectA.value;

    if (char1Value === "9" && char2Value === "1" && char3Value === "1") {
      mostrarMensaje(password1Message, "Password 1 Correcto!!");
    } else {
      mostrarMensaje(
        password1Message,
        "Password Incorrecto!! Es una lástima, haz perdido tus Stickers :("
      );
    }
  }

  // Función para verificar el segundo password
  function verificarPassword2() {
    const char1Value = char1SelectB.value;
    const char2Value = char2SelectB.value;
    const char3Value = char3SelectB.value;

    if (char1Value === "7" && char2Value === "1" && char3Value === "4") {
      mostrarMensaje(password2Message, "Password 2 Correcto!!");
    } else {
      mostrarMensaje(
        password2Message,
        "Password Incorrecto!! Es una lástima, haz perdido tus Stickers :("
      );
    }
  }

  // Función para mostrar el mensaje debajo del texto correspondiente
  function mostrarMensaje(elemento, mensaje) {
    elemento.textContent = mensaje;
  }

  // Event listener para el botón de verificar password 1
  verificarBtnA.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del botón
    verificarPassword1(); // Verificar el primer password
  });

  // Event listener para el botón de obtener stickers
  obtenerBtnB.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del botón
    verificarPassword2(); // Verificar el segundo password
  });

  // Desactivar los botones inicialmente
  verificarBtnA.disabled = true;
  obtenerBtnB.disabled = true;

  // Función para habilitar el botón si todos los selectores tienen un valor seleccionado
  function checkEnableButtonA() {
    if (
      char1SelectA.value !== "" &&
      char2SelectA.value !== "" &&
      char3SelectA.value !== ""
    ) {
      verificarBtnA.disabled = false;
    } else {
      verificarBtnA.disabled = true;
    }
  }

  function checkEnableButtonB() {
    if (
      char1SelectB.value !== "" &&
      char2SelectB.value !== "" &&
      char3SelectB.value !== ""
    ) {
      obtenerBtnB.disabled = false;
    } else {
      obtenerBtnB.disabled = true;
    }
  }

  // Añadir event listeners para chequear los selectores
  char1SelectA.addEventListener("change", checkEnableButtonA);
  char2SelectA.addEventListener("change", checkEnableButtonA);
  char3SelectA.addEventListener("change", checkEnableButtonA);

  char1SelectB.addEventListener("change", checkEnableButtonB);
  char2SelectB.addEventListener("change", checkEnableButtonB);
  char3SelectB.addEventListener("change", checkEnableButtonB);
});
