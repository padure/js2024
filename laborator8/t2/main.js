//Variabile
const checklistEl   = document.querySelector('#checklist');
const addItemEl     = document.querySelector('#addItem');
const itemParentEl  = document.querySelector('#itemParent');

// Functii
const addItem = (event) => {
    let val = event.target.value;
    if(val.trim() && event.keyCode === 13){
        addItemEl.value = "";
        itemParentEl.innerHTML += getItemHtml(val);
    }
}

const getItemHtml = (val) => {
    return `<div class='item'>
                <input type="checkbox" class="checkbox">
                <div class="text">${val}</div>
                <input type="text" class="edit">
                <button class="remove">x</button>
            </div>`;
}

const initRemoveItem = (event) => {
    let isRemoveEl = event.target.className === "remove";
    if(isRemoveEl){
        const item = event.target.closest(".item");
        if(item){
            itemParentEl.removeChild(item);
        }
    }
}

const initEditItem = (event) => {
    let isEditEl = event.target.className === "text";
    if(isEditEl) {
        const item = event.target.closest(".item");
        if(item){
            item.classList.add("edit");
            const editInput = item.querySelector("input.edit");
            editInput.value = event.target.textContent;
            editInput.focus();
        }
    }
}

const saveEditItem = (event) => {
    let isEdit = event.target.className = "edit";
    if(isEdit && event.keyCode === 13){
        const item = event.target.closest(".item");
        if(item) {
            item.classList.remove("edit");
            let newText = event.target.value.trim();
            if(newText){
                item.querySelector(".text").textContent = newText;
            }
        }
    }
}

const initCompleteItem = (event) => {
    let isCheckbox = event.target.className === "checkbox";
    if(isCheckbox){
        const item = event.target.closest(".item");
        if(item && event.target.checked){
            item.classList.add("complete");
        }
    }
}

//Main
addItemEl.addEventListener('keyup', addItem);
checklistEl.addEventListener('click', initRemoveItem);
checklistEl.addEventListener('dblclick', initEditItem);
checklistEl.addEventListener('keyup', saveEditItem);
checklistEl.addEventListener('change', initCompleteItem);
