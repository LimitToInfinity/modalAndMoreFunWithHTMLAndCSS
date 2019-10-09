const $body = document.querySelector("body")
const $showModal = document.querySelector(".show-modal")
const $closeModal = document.querySelector(".close-modal")
const $modal = document.querySelector(".modal")
const $button = document.querySelector(".menu")
const $aside = document.querySelector("aside")

$button.addEventListener("click", event => {
    $aside.classList.toggle("open")
    $body.classList.toggle("open")
})

$showModal.addEventListener("click", event => {
    $modal.classList.toggle("open")
})

$closeModal.addEventListener("click", event => {
    $modal.classList.toggle("open")
})