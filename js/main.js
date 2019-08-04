const tabItems= document.querySelectorAll('.tab-item');
const tabContentItems= document.querySelectorAll('.tab-content-item');

// this function will add a css class to tab item
function selectItem(e){
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// For each click event runs selectItem function on item
tabItems.forEach(item => item.addEventListener('click', selectItem));
