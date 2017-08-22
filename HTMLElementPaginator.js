class ElementPaginator{
    constructor(elementArrayToPaginate,paginateBy,navigationContainer,navButtonHTMLString,nextButtonHTMLString,prevButtonHTMLString){

    }

    appendHtml(element, str) {
      var div = document.createElement('div');
      div.innerHTML = str;
      while (div.children.length > 0) {
        element.appendChild(div.children[0]);
      }
    }

    preserveDisplayProperty(element){
        var property = element.style.display;
        element.setAttribute('displayProp',property);
    }

    restoreDisplayProperty(element){
        var property = element.getAttribute('displayProp');
        element.setAttribute('displayProp',property);
    }

    makeInvisible(elementArray){
        for(i=0;i<elementArray.length;i++){
            preserveDisplayProperty(elementArray[i]);
            elementArray[i].style.display = 'none';
        }
    }

    makeVisible(elementArray){
        for(i=0;i<elementArray.length;i++){
            restoreDisplayProperty(elementArray[i]);
        }
    }

    generatePaginatedArray(elementArray,paginateBy){
        var paginatedArray= [];
        for(var i=0; i<elementArray.length; i++){
            var tempArray = [];
            if(tempArray.length < paginateBy){
                tempArray.push(elementArray[i]);
            }else{
                paginatedArray.push(tempArray);
                tempArray = [];    
            }
            if(parseInt(i-1)==elementArray.length){
                paginatedArray.push(tempArray);
                tempArray= [];
                return paginatedArray;
            }
        }
    }

    goToPage(page,paginatedArray){
        for(var i=0; i< paginatedArray.length;i++){
            makeInvisible(paginatedArray[i]);
        }
        makeVisible(paginatedArray[page]);
    }

    generateNavigation(currentPage;prevButtonHTMLString,nextButtonHTMLString,navButtonHTMLString,navContainer){
        
    }

    nextPage(){

    }
    precPage(){

    }

}




// function generatejobPrevAndNexButtons(currentPage){
//     document.getElementById('jobNextPage').style.display = '';
//     document.getElementById('jobPrevPage').style.display = '';
//     document.getElementById('jobNextPage').setAttribute( "onClick", "javascript: goTojobPage("+parseInt(currentPage+1)+");" )
//     document.getElementById('jobPrevPage').setAttribute( "onClick", "javascript: goTojobPage("+parseInt(currentPage-1)+");" )
//     if(parseInt(currentPage)==parseInt(jobPaginatedArray.length-1)){
//         document.getElementById('jobNextPage').style.display = 'none';
//     }
//     if(currentPage==0){
//         document.getElementById('jobPrevPage').style.display = 'none';
//     }

//     var navButtons = document.getElementsByClassName('job-pn');
//     for(var i=0;i<navButtons.length;i++){
//         navButtons[i].classList.remove('current');
//         if (parseInt(navButtons[i].textContent) == parseInt(currentPage+1)) {
//             navButtons[i].classList.add('current');
//         }
//     }
// }
// 



// let jobArticles = document.getElementsByClassName('job-container');
// var jobPaginatedArray = [];

// var tempArray = [];
// var counter =0;
// for(i = 0; i < jobArticles.length; i++){
//     jobArticles[i].style.display = 'none';
//     if(counter < 8){
//         tempArray.push(jobArticles[i]);
//         counter ++;
//         if(i==parseInt(jobArticles.length)-1){
            
            
//              jobPaginatedArray.push(tempArray);
//         }
//     }
//     else{
//         jobPaginatedArray.push(tempArray);
//         tempArray = [];
//         tempArray.push(jobArticles[i])
//         counter = 1;
//     }
// } 
// for(var i=0;i<jobPaginatedArray.length;i++){
//     var toAdd = '<a class="pn-item mb-pt-hide job-pn" onclick="goTojobPage('+i+')">' + parseInt(i+1) + '</a>'

//     //var toAdd = '<a onclick="goTojobPage('+i+')">' + parseInt(i+1) + '</a>';

//     appendHtml( document.getElementById('jobPages'),toAdd);
// }
// if(jobPaginatedArray.length>0){
//     makeVisible(jobPaginatedArray[0]);
//     generatejobPrevAndNexButtons(0);
// }
                                                                       
