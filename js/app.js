const $contactForm = document.querySelector(".contact-form")
const $firstName = document.querySelector("#first-name")
const $errorMessage1 = document.querySelector(".error-message-one")
const $lastName = document.querySelector("#last-name")
const $errorMessage2 = document.querySelector(".error-message-two")
const $emailAddress = document.querySelector("#email-address")
const $errorMessageEmail = document.querySelector(".error-message-email")
const $areaMessage = document.querySelector("#message")
const $errorMessageText = document.querySelector(".error-message-message")

$contactForm.addEventListener("submit", function (e) {

    console.log("Le formulaire viens d'être soumis")

    e.preventDefault()
    
    console.log($firstName.value)
    console.log($lastName.value)
    console.log($emailAddress.value)

    const firstName = $firstName.value

    console.log(firstName)

    if (firstName.length === 0) {
        $firstName.classList.add("error")
        $errorMessage1.classList.remove("hidden")
    } else {
        $firstName.classList.remove("error")
        $errorMessage1.classList.add("hidden")
    }

    const lastName = $lastName.value

    if (lastName.length === 0) {
        $lastName.classList.add("error")
        $errorMessage2.classList.remove("hidden")
    } else {
        $lastName.classList.remove("error")
        $errorMessage2.classList.add("hidden")
    }

    const emailAddress = $emailAddress.value

    if (emailAddress.length === 0) {
        $emailAddress.classList.add("error")
        $errorMessageEmail.classList.remove("hidden")
    } else {
        $emailAddress.classList.remove("error")
        $errorMessageEmail.classList.add("hidden")
    }

    const areaMessage = $areaMessage.value

    if (areaMessage.length === 0) {
        $areaMessage.classList.add("error")
        $errorMessageText.classList.remove("hidden")
    } else {
        $areaMessage.classList.remove("error")
        $errorMessageText.classList.add("hidden")
    }
})