var box = document.getElementById('box')
box.addEventListener('mouseover', function(event){
    box.style.backgroundColor='blue';
})
box.addEventListener('mouseout', function(event){
    box.style.backgroundColor='red';
})