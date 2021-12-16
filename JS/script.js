const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})


new Typed('#typed',{ //typed in page home
  strings : ['Andrés.','Full Stack Developer.'],  
  typeSpeed : 150,
  delaySpeed : 150,
  loop : true 
 
});
