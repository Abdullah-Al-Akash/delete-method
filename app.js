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