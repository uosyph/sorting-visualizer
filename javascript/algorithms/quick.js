async function partitionLomuto(ele, l, r){
    let i = l - 1;
    ele[r].style.background = '#CA4E79';
    for(let j = l; j <= r - 1; j++){
        ele[j].style.background = '#FADF7F';
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i], ele[j]);
            ele[i].style.background = '#f4a261';
            if(i != j) ele[j].style.background = '#f4a261';
            await waitforme(delay);
        }
        else{
            ele[j].style.background = '#F9C0C0';
        }
    }
    i++; 
    await waitforme(delay);
    swap(ele[i], ele[r]);
    ele[r].style.background = '#F9C0C0';
    ele[i].style.background = '#519259';

    await waitforme(delay);
    
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != '#519259')
            ele[k].style.background = '#7ac7bd';
    }
    return i;
}

async function quickSort(ele, l, r){
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = '#519259';
            ele[l].style.background = '#519259';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableReloadBtn();
    document.querySelector(".quickSort").style.color = 'white';
    document.querySelector(".quickSort").style.background = '#58afcc';
    document.querySelector(".quickSort").style.border = '1.5px #58afcc solid';
    await quickSort(ele, l, r);
    document.querySelector(".quickSort").style.color = '';
    document.querySelector(".quickSort").style.background = '';
    document.querySelector(".quickSort").style.border = '';
    disableReloadBtn();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});