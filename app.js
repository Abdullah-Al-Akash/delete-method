const deleteField = document.getElementById('input-area');
const deleteText = deleteField.value;
const name = document.getElementById('name');

// Catch Deleted text:
deleteField.addEventListener("change", function () {
        deleteValidation();
})
deleteField.addEventListener("keyup", function () {
        deleteValidation();
})
// Condition For Delete Button:
deleteBtn.setAttribute("disabled", true);
function deleteValidation() {
        const deleteBtn = document.getElementById('delete-btn');
        if (deleteText == 'delete') {
                deleteBtn.removeAttribute("disabled", true);
        }
        // else {
        //         deleteBtn.setAttribute("disabled", true);
        // }
}
// Delete Button:
deleteBtn.addEventListener("click", function () {
        name.style.display = "none";
})