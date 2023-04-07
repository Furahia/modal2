// get modal element
var modal =document.getElementById ('simpleModal');
//get open modal button
var modalBtn =document.getElementById ('modalBtn');
//get  close button
var CloseBtn =document.getElementsByClassName ('CloseBtn')[0];

//events...listen for open click
modalBtn.addEventListener('click',openModal)

//events...listen for close click
CloseBtn.addEventListener('click',closeModal)

//LISTEN FOR OUTSIDE CLICK
window.addEventListener('click',outsideClick)

//function to open modal
function openModal() {
modal.style.display = 'block'    
}

//function to close modal
function closeModal() {
  modal.style.display = 'none'    
  }

  function outsideClick(e) {
    if(e.target == modal){ 
    modal.style.display = 'none'    
    }}
  