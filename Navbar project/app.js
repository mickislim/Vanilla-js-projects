const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

toggle.addEventListener('click', function (){
    //console.log(links.classList);
    //console.log(links.classList.contains('links'));

  //  if (links.classList.contains('show-links')) {
    //    links.classList.remove('show-links');
        
    //} else {
      //  links.classList.add('show-links');
        
   // }


   //you can use a one liner

   links.classList.toggle('show-links');
});