let opening = document.getElementById("opening");
let closing = document.querySelectorAll("#closing");
let modalcontainers = document.getElementById("constt");

closing.forEach((element) => {
  element.addEventListener("click", () => {
    modalcontainers.classList.remove("modalcontainershow");
  });
});

opening.addEventListener("click", () => {
  modalcontainers.classList.add("modalcontainershow");
});
