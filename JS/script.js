
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active'); //show menu
  showcase.classList.toggle('active');
})


new Typed('#typed',{ //typed in page home
  strings : ['Andrés.','Full Stack Developer.'],  
  typeSpeed : 150,
  delaySpeed : 150,
  loop : true 
 
});


AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 2000 // values from 0 to 3000, with step 50ms
});


document.querySelector('#contact-form').addEventListener('submit', (e) => { //value elements to form
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});