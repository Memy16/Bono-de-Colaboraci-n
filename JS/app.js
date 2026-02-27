function copiar(idNumero, idMensaje) {
    const texto = document.getElementById(idNumero).innerText;
    navigator.clipboard.writeText(texto);

    const mensaje = document.getElementById(idMensaje);
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.display = "none";
    }, 2000);
}