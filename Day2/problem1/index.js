var form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    var name = document.getElementById('name').value
    var age = document.getElementById('age').value
    console.log(name)
    if (name.trim() === '') {
        alert("Enter your name")
        return

    }
    if (isNaN(age)) {
        alert('Enter your age')
        return;
    }
    if (age < 18) {
        alert("Age should be greater than 18")
        return;
    }

    alert(`${name} of age ${age} your form submitted  successfully`)
    form.reset()
});