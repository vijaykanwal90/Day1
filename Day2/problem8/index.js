var array = [14,2,35,83,42,5,16,7]
var button = document.getElementById('reverse')

function displayData(id){
    if(id==''){
        id='array-data'
    }
    var displayBox = document.getElementById(id)
    displayBox.innerHTML = ''
    
    
    array.forEach(item =>{
     var listItem = document.createElement('li')
     listItem.style.listStyle = 'none'
     listItem.textContent= item;
     displayBox.appendChild(listItem)

    })
}
function swap(arr,left,right){
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right]=temp;
}
function  reverseArray(arr){
 var left = 0;
 var right = arr.length-1;
 while(left<right){
    swap(arr,left,right);
    left++;
    right--;
 }
 return arr;
}
button.addEventListener('click', function(event){
    

    
    reverseArray(array)
    displayData('reverse-data')
    

})
window.onload = () => displayData('array-data');

