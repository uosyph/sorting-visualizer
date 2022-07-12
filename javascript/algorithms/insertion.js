async function insertion() {
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = '#519259';
    for(let i = 1; i < ele.length; i++){
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = '#495C83';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            ele[j].style.background = '#495C83';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            for(let k = i; k >= 0; k--){
                ele[k].style.background = '#519259';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = '#519259';
    }
}


const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableReloadBtn();
    document.querySelector(".insertionSort").style.color = 'white';
    document.querySelector(".insertionSort").style.background = '#58afcc';
    document.querySelector(".insertionSort").style.border = '1.5px #58afcc solid';
    await insertion();
    document.querySelector(".insertionSort").style.color = '';
    document.querySelector(".insertionSort").style.background = '';
    document.querySelector(".insertionSort").style.border = '';
    disableReloadBtn();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

