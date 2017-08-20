 <script type="text/javascript">
                                    function appendHtml(el, str) {
                                      var div = document.createElement('div');
                                      div.innerHTML = str;
                                      while (div.children.length > 0) {
                                        el.appendChild(div.children[0]);
                                      }
                                    }
                                    function makeInvisible(array){
                                        for(i=0;i<array.length;i++){
                                            array[i].style.display = 'none';
                                        }
                                    }
                                    function makeVisible(array){
                                        for(i=0;i<array.length;i++){
                                            array[i].style.display = '';
                                        }

                                    }
                                    function generatejobPrevAndNexButtons(currentPage){
                                        document.getElementById('jobNextPage').style.display = '';
                                        document.getElementById('jobPrevPage').style.display = '';
                                        document.getElementById('jobNextPage').setAttribute( "onClick", "javascript: goTojobPage("+parseInt(currentPage+1)+");" )
                                        document.getElementById('jobPrevPage').setAttribute( "onClick", "javascript: goTojobPage("+parseInt(currentPage-1)+");" )
                                        if(parseInt(currentPage)==parseInt(jobPaginatedArray.length-1)){
                                            document.getElementById('jobNextPage').style.display = 'none';
                                        }
                                        if(currentPage==0){
                                            document.getElementById('jobPrevPage').style.display = 'none';
                                        }

                                        var navButtons = document.getElementsByClassName('job-pn');
                                        for(var i=0;i<navButtons.length;i++){
                                            navButtons[i].classList.remove('current');
                                            if (parseInt(navButtons[i].textContent) == parseInt(currentPage+1)) {
                                                navButtons[i].classList.add('current');
                                            }
                                        }
                                    }
                                    function goTojobPage(page){
                                        for(var i=0; i< jobPaginatedArray.length;i++){
                                            makeInvisible(jobPaginatedArray[i]);
                                        }
                                        makeVisible(jobPaginatedArray[page]);
                                        generatejobPrevAndNexButtons(page);
                                        pageNext = i+1;
                                        pagePrev = i-1;
                                       
                                    }



                                    let jobArticles = document.getElementsByClassName('job-container');
                                    var jobPaginatedArray = [];
                                    
                                    var tempArray = [];
                                    var counter =0;
                                    for(i = 0; i < jobArticles.length; i++){
                                        jobArticles[i].style.display = 'none';
                                        if(counter < 8){
                                            tempArray.push(jobArticles[i]);
                                            counter ++;
                                            if(i==parseInt(jobArticles.length)-1){
                                                
                                                
                                                 jobPaginatedArray.push(tempArray);
                                            }
                                        }
                                        else{
                                            jobPaginatedArray.push(tempArray);
                                            tempArray = [];
                                            tempArray.push(jobArticles[i])
                                            counter = 1;
                                        }
                                    } 
                                    for(var i=0;i<jobPaginatedArray.length;i++){
                                        var toAdd = '<a class="pn-item mb-pt-hide job-pn" onclick="goTojobPage('+i+')">' + parseInt(i+1) + '</a>'
                                    
                                        //var toAdd = '<a onclick="goTojobPage('+i+')">' + parseInt(i+1) + '</a>';

                                        appendHtml( document.getElementById('jobPages'),toAdd);
                                    }
                                    if(jobPaginatedArray.length>0){
                                        makeVisible(jobPaginatedArray[0]);
                                        generatejobPrevAndNexButtons(0);
                                    }
                                                                       
                                </script>
