function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}


// Disables sorting buttons
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}
// Enables sorting buttons
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}
// Enables size slider
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

// Disables new array button
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}
// Enables new array
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// Used in the animations of sorting
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Select the size of the array
let arraySize = document.querySelector('#arr_sz');
arraySize.addEventListener('input', function(){
    createNewArray(parseInt(arraySize.value));
});

// the delay of the animation
let delay = 0;

// Select the speed of the animation
let delayElement = document.querySelector('#speed_input'); 
delayElement.addEventListener('input', function(){
    delay = 1000 - parseInt(delayElement.value);
});

// Generat new array
let array = [];
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 150) {
    // Delete old bars
    deleteChild();
    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    // console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");
    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Function to delete old bars so new ones can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting the new array button
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

// A work around to stop the sorting without breaking something 
const Reload = document.querySelector(".reload");
// Disabled by default and only enable while sorting is running
disableReloadBtn();
Reload.addEventListener("click", function(){
    location.reload();
});

// Disable the reload button
function disableReloadBtn(){
    document.querySelector(".reload").disabled = true;
}
// Enable the reload button
function enableReloadBtn(){
    document.querySelector(".reload").disabled = false;
}

