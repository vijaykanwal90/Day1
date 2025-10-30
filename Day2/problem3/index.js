var array = [1,2,3,4,5]
var form = document.getElementById('form')

function displayData(){
    var displayBox = document.getElementById('array-data')
    displayBox.innerHTML = ''
    
    
    array.forEach(item =>{
     var listItem = document.createElement('li')
     listItem.style.listStyle = 'none'
     listItem.textContent= item;
     displayBox.appendChild(listItem)

    })
}
form.addEventListener('submit', function(event){
    event.preventDefault()
var element = document.getElementById('element').value
    array.push(element)
    displayData()
    form.reset()

})
window.onload = displayData
