//EFFET SUR LE TITRE//
ScrollReveal().reveal('h1', {delay: 200, distance: '40px', scale: 1});
ScrollReveal().reveal('h2', {delay: 200, distance: '40px', scale: 1});


//HISTORIQUE DE RECHERCHE//
      let i = 0;
      function add() {   
      const listItem = document.querySelector("input").value;
	    const listed = '<ul>' + listItem + '</ul>';
      document.querySelector("aside").innerHTML += listed;
      };



      // // SIDENAV (no fixed)//
// function openNav() {
//     document.getElementById("sideNavigation").style.width = "300px";
//     document.getElementById("main").style.marginLeft = "300px";
// }
 
// function closeNav() {
//     document.getElementById("sideNavigation").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
// }



// // Header fixé au scroll (no fixed)
// window.onscroll = function () {
        
//     if(document.documentElement.scrollTop > 70){
//       document.querySelector("header").style.position = "fixed";
//       document.querySelector("header").style.top = "0";
//       document.querySelector("header").style.paddingRight = "1060px";
//       document.querySelector("header").style.paddingLeft = "1042px"; 
//     }
//     else{
//       document.getElementById("header").style.background = "white";
//     }
//   }