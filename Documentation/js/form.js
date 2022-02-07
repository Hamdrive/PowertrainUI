const forms = document.querySelectorAll(".form")
const failMessage = document.querySelectorAll(".input-validation-fail")

forms.forEach((form) => form.addEventListener("submit", (e) => {
    if(!form.checkValidity()){
        e.preventDefault()
        failMessage.forEach((fail) => {

            fail.classList.remove("validate")
        })
    }
}))