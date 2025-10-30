var array = [1,2,3,3,4,5,6,7]
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
    var element = document.getElementById('element').value 
    var result = document.getElementById('result')

    event.preventDefault()
    var found = false;
    for( var i =0;i<array.length;i++){
        if(element==array[i]){

            result.textContent = `Element found at index ${i}`;
            found=true;
            break;
        }
    }
    if(!found){
        result.textContent='Element not found'
    }
    
    displayData()
    

})
window.onload = displayData
