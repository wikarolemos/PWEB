const inputText = document.getElementById('inputText')
const upperCaseCheckbox = document.getElementById('upperCaseCheckbox')
const lowerCaseCheckbox = document.getElementById('lowerCaseCheckbox')

upperCaseCheckbox.addEventListener('change', function () {
    inputText.value = inputText.value.toUpperCase()
    lowerCaseCheckbox.checked = false
})

lowerCaseCheckbox.addEventListener('change', function () {
    inputText.value = inputText.value.toLowerCase()
    upperCaseCheckbox.checked = false
})