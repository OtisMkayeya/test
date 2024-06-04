const header = document.querySelector("header");


window.addEventListener("scroll",function(){
  let scrollPageDown = window.scrollY
  if(scrollPageDown = window.scrollY){
  header.classList.add ("sticky",window.scrollY >120);
}else{
  header.classList.remove("sticky");
}
});

////=================================responsive behavior when screen resized===============================///
window.addEventListener("resize", function() {
  if (window.innerWidth <= 768) { // Adjust this value as needed based on your responsive breakpoints
    header.classList.add("sticky"); // Add class to make header fixed
  } else {
    header.classList.remove("sticky"); // Remove class to make header not fixed
  }
});



let menu = document.querySelector('#menu-icon');
let navlist= document.querySelector('.navlist');
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x'); //this will remove the menu icon when scrolling
  navlist.classList.remove('active');
};


 /*=========SUBMITION SECTION FOR MY GOOOGLE SHEET=========*/
 
 const scriptURL = 'https://script.google.com/macros/s/AKfycbxoe1aAGBH85xhKAyecPxOqYtIeWN8FmolQUljkyuJdJWjCzKe7VCbkW651mHYCZrDIrw/exec'
 const form = document.forms['submit-to-google-sheet']
 const msg = document.getElementById("msg")

 form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {
       msg.innerHTML = "Message sent successfully"
       setTimeout(function(){
         msg.innerHTML = ""
       },4000)
       form.reset()
     })
     .catch(error => console.error('Error!', error.message))
 })

 