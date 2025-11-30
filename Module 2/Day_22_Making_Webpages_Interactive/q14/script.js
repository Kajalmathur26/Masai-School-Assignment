// Fixed typo in querySelector id
const para = document.querySelector('#message'); 

// Fixed method name from getElementByName to getElementById
const textButton = document.getElementById('textButton'); 

// Fixed event listener method name from addClickEventListener to addEventListener
textButton.addEventListener('click', () => { 
    // Fixed property name from contentText to textContent
    para.textContent = 'New Message'; 
});

const box = document.getElementById('box');
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', () => {
    // Fixed typo from styl to style
    box.style.backgroundColor = 'blue';
});
