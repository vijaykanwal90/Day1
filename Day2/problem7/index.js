var array = [14,2,35,83,42,5,16,7]
var button = document.getElementById('sort')

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
function  insertionSort(arr){
 for(var i =1;i<arr.length;i++){
    var key = arr[i];
    var j = i-1;

    while(j>=0 && arr[j]>key){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1]= key;
 }
 return arr;
}
button.addEventListener('click', function(event){
    

    
    insertionSort(array)
    displayData()
    

})
window.onload = displayData
