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
    
            
               
  