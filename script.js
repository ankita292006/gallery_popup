const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function openModal(index) {
  modal.style.display = "flex";
  modalImg.src = images[index].src;
  caption.textContent = images[index].alt;
  currentIndex = index;
  document.body.style.overflow = "hidden";
}

images.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

closeBtn.onclick = closeModal;

modal.onclick = (e) => {
  if (e.target === modal) closeModal();
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(currentIndex);
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(currentIndex);
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});
