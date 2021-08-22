const dropdownHeader = document.querySelectorAll('.dropdown__header');
const dropdownBody = document.querySelectorAll('.dropdown__body');


for (let i = 0; i < dropdownHeader.length; i++) {
  
  dropdownHeader[i].onclick = function(){
    if (this.nextElementSibling.style.maxHeight) {
      hidePanels()
    }else{
      showPanel(this)
    }
  }
  
}

function showPanel(elem){
  hidePanels();
  elem.classList.add('active');
  elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + 'px';
}

function hidePanels(){
  for (let i = 0; i <dropdownBody.length; i++) {
    dropdownBody[i].style.maxHeight = null;
    dropdownHeader[i].classList.remove('active');
  }
}