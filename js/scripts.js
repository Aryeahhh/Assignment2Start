// function to change custom color
function changeCustomColor(input) {
    let pTag = document.getElementById('myStudentId');
    pTag.innerText = 'Student ID - 1217030';

    let color;
    if (input < 0 || input > 100) {
        color = 'red';
    } else if (input <= 20) {
        color = 'green';
    } else if (input <= 40) {
        color = 'blue';
    } else if (input <= 60) {
        color = 'orange';
    } else if (input <= 80) {
        color = 'purple';
    } else {
        color = 'yellow';
    }

    document.body.style.backgroundColor = color;
}

// function to change random color
function changeRandomColor() {
    let randomInput = Math.floor(Math.random() * 100) + 1;
    changeCustomColor(randomInput);
}

// function to add list of images
function addList() {
    let selectList = document.getElementById('imageSelect');
    let images = ['img1','img2','img3','img4','img5']; 

    for (let i = 0; i < images.length; i++) {
        let option = document.createElement('option');
        option.value = images[i];
        option.text = images[i];
        selectList.appendChild(option);
    }
}

// function to change image
function changeImage() {
    let image = document.getElementById('imageSelect').value;
    let img = document.getElementById('images');
    img.src = `img/${image}.jpg`;
    img.alt = image;
}

// event listeners for on click event of buttons and select
let customColor = document.querySelector('.custColor');
let randomColor = document.querySelector('.randColor');
let selectList = document.getElementById('imageSelect');

customColor.addEventListener('click', function () {
    let customNumber = document.getElementById('customNumber');
    changeCustomColor(customNumber.value);
});
randomColor.addEventListener('click', changeRandomColor);
addList();
selectList.addEventListener('change', changeImage);