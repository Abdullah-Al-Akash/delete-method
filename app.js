const deleteField = document.getElementById('input-area');
const name = document.getElementById('name');

// Catch Deleted text:
deleteField.addEventListener("change", function () {
        deleteValidation();
})
deleteField.addEventListener("keyup", function () {
        deleteValidation();
})

const deleteBtn = document.getElementById('delete-btn');
// Condition For Delete Button:
function deleteValidation() {
        const deleteText = deleteField.value;
        if (deleteText == 'delete') {
                deleteBtn.removeAttribute("disabled");
        }
        else {
                deleteBtn.setAttribute("disabled", true);
        }
}
// Delete Button:
deleteBtn.addEventListener("click", function () {
        name.style.display = "none";
})

// Added New Sobji:
const addSobji = document.getElementById('sobji-input');
const sobjiAdd = document.getElementById('sobji-add');
const ul = document.getElementById('ul');

addSobji.addEventListener("change", function (e) {
        sobjiValidation(e.target.value);

        sobjiAdd.addEventListener("click", function () {
                const li = document.createElement('li');
                li.innerHTML = `${e.target.value} <button class="btn">❌</button>`;
                ul.appendChild(li);
                sobjiAdd.setAttribute("disabled", true);
        })
})

addSobji.addEventListener("keyup", function (e) {
        sobjiValidation(e.target.value);

        sobjiAdd.addEventListener("click", function () {
                const li = document.createElement('li');
                li.innerHTML = `${e.target.value} <button class="btn">❌</button>`;
                ul.appendChild(li);
                sobjiAdd.setAttribute("disabled", true);
        })
})

// Validation for Add Sobji
function sobjiValidation(parameter) {
        if (parameter.length > 0) {
                sobjiAdd.removeAttribute("disabled");
        }
        else {
                sobjiAdd.setAttribute("disabled", true);
        }
}

// Add Sobji Via Add Button: