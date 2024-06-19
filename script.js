const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    } )
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    } )
}

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};


$(document).ready(function(){
    $("#myinput").on("keyup",function(){
    var value = $(this).val().toLowerCase();
    $("#card div").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);

    });
});
    });


    function myfunction(){
        let confirmation = confirm("Do you want to add this item to your cart?")
        if (confirmation == true){
                alert ("Item added to cart.")
            }
            }
    
            
               
  