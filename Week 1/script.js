function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('show');
  }    
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}


const form = document.getElementById("comment-form");
  const commentList = document.getElementById("comment-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("username").value.trim();
    const text = document.getElementById("usercomment").value.trim();

    if (name && text) {
      const commentBox = document.createElement("div");
      commentBox.className = "comment";
      commentBox.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
      commentList.prepend(commentBox);

      
      form.reset();
    }
  });