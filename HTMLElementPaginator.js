//Shameless Author : Shaffaaf Ahmed
//Shamelessly produced on: 25 Aug 2017

class ElementPaginator {


  constructor(elementArrayToPaginate, paginateBy, navigationContainer, objectName) {
    this.navigationContainer = navigationContainer;
    this.objectName = objectName;
    this.paginatedArray = this.generatePaginatedArray(elementArrayToPaginate, paginateBy);
    this.goToPage(0, this.paginatedArray);
    this.generateNavigation(0, navigationContainer);
  }

  getObjectName() {
    for (var name in window) {
      //console.log(this);
      //console.log(this)
      if (window[name] == this) {
        //console.log('name',name)
        return name;
      }
    }
  }

  appendHtml(elementContainer, str) {
    var appendedElement = null;
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
      appendedElement = elementContainer.appendChild(div.children[0]);
      return appendedElement;
    }
  }

  preserveDisplayProperty(element) {
    var property = element.style.display;
    element.setAttribute('displayProp', property);
  }

  restoreDisplayProperty(element) {
    var property = element.getAttribute('displayProp');
    if (property !== 'none')
      element.style.display = property;
    else
      element.style.display = '';
  }

  makeInvisible(elementArray) {
    for (var i = 0; i < elementArray.length; i++) {
      this.preserveDisplayProperty(elementArray[i]);
      elementArray[i].style.display = 'none';
    }
  }

  makeVisible(elementArray) {
    for (var i = 0; i < elementArray.length; i++) {
      this.restoreDisplayProperty(elementArray[i]);
    }
  }

  generatePaginatedArray(elementArray, paginateBy) {
    var paginatedArray = [];
    var tempArray = [];
    for (var i = 0; i < elementArray.length; i++) {
      if (tempArray.length < paginateBy) {
        tempArray.push(elementArray[i]);

      } else {
        paginatedArray.push(tempArray);
        tempArray = [];
        tempArray.push(elementArray[i]);
      }
      if (parseInt(i + 1) == elementArray.length) {
        paginatedArray.push(tempArray);
        tempArray = [];
        return paginatedArray;
      }
    }
  }

  goToPage(page) {
    console.log('inside function', page, )
    console.log(this.getObjectName())
    for (var i = 0; i < this.paginatedArray.length; i++) {
      this.makeInvisible(this.paginatedArray[i]);
    }
    this.makeVisible(this.paginatedArray[parseInt(page)]);

    this.generateNavigation(page, this.navigationContainer);
  }

  generateNavigation(currentPage, navigationContainer) {
    navigationContainer.innerHTML = '';
    var prevPage = null;
    var nextPage = null;

    if (currentPage > 0)
      prevPage = parseInt(currentPage - 1);

    if (currentPage !== parseInt(this.paginatedArray.length - 1))
      nextPage = parseInt(currentPage + 1);


    if (prevPage !== null) {
      var prevPageHTML = '<a onclick="'+this.objectName+'.goToPage(' + parseInt(currentPage - 1) + ')"><</a>';
      this.appendHtml(navigationContainer, prevPageHTML);
    }


    for (var i = 0; i < this.paginatedArray.length; i++) {
      var buttonHTML = '<a onclick="' + this.objectName + '.goToPage(' + i + ')">' + i + '</a>'
      this.appendHtml(navigationContainer, buttonHTML);
    }

    if (nextPage !== null) {
      var nextPageHTML = '<a onclick="'+this.objectName+'.goToPage(' + parseInt(currentPage + 1) + ')">></a>';
      this.appendHtml(navigationContainer, nextPageHTML);
    }
  }



}
