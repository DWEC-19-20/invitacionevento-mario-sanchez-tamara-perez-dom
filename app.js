const name = document.getElementById('name');
const enviar = document.querySelector('button.enviar');

const listUl = document.getElementById('invitedList');
const lis = listUl.children;

function attachListItems(li) {
  let nameLi = document.createElement('span');
  nameLi.textContent = name.value;
  li.appendChild(nameLi);

  let labelLi = document.createElement('label');
  let inputLi = document.createElement('input');
  inputLi.type = 'checkbox';
  //remove.className = 'remove';
  labelLi.textContent = ' Confirmed';
  labelLi.appendChild(inputLi);
  li.appendChild(labelLi);

  let editLi = document.createElement('button');
  //remove.className = 'remove';
  editLi.textContent = 'edit';
  li.appendChild(editLi);

  let removeLi = document.createElement('button');
  //remove.className = 'remove';
  removeLi.textContent = 'remove';
  li.appendChild(removeLi);
}

function checkNames(ul){
    var namesSpan = document.querySelectorAll('span');
    for (let i = 0; i < namesSpan.length; i++) {
      if(namesSpan[i].textContent == name.value){
          return false;
      }
    }
    return true;
}

/*for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}*/

enviar.addEventListener('click', () => {
    event.preventDefault();
    if(checkNames(listUl)){
        //let ul = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li');
        attachListItems(li);
        listUl.appendChild(li);
        name.value = '';
    }
    else{
        alert('El nombre ya existe.');
    }
  });
