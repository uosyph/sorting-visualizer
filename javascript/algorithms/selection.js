async function selection(){
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        let min_index = i;
        ele[i].style.background = '#495C83';
        for(let j = i+1; j < ele.length; j++){
            ele[j].style.background = '#CA4E79';

            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index !== i){
                    ele[min_index].style.background = '#7ac7bd';
                }
                min_index = j;
            } 
            else{
                ele[j].style.background = '#7ac7bd';
            }   
        }
        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        ele[min_index].style.background = '#7ac7bd';
        ele[i].style.background = '#519259';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableReloadBtn();
    document.querySelector(".selectionSort").style.color = 'white';
    document.querySelector(".selectionSort").style.background = '#58afcc';
    document.querySelector(".selectionSort").style.border = '1.5px #58afcc solid';
    await selection();
    document.querySelector(".selectionSort").style.color = '';
    document.querySelector(".selectionSort").style.background = '';
    document.querySelector(".selectionSort").style.border = '';
    disableReloadBtn();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});