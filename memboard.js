class NameLink {
    constructor(element) {
      // Assign this.element to the passed in DOM element
      // this.element;
      this.element = element;
  
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.name;
      //console.log(this.data)
  
      // Using the custom data attribute get the associated Item element
      this.nameElement = document.querySelector(`.iteminfo[data-name='${this.data}']`);
      //console.log(this.itemElement)
  
      // Using the Item element, create a new instance of the TabItem class
      this.MemInfo = new MemInfo(this.nameElement);
      //console.log(this.tabItem)
  
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => this.select() );
    };
  
    select() {
        this.MemInfo.select();
    }
  }

  class MemInfo {
    constructor(element) {
      // Assign this.element to the passed in element
      // this.element;
      this.element = element;
    }
  
    select() {
    const items = document.querySelectorAll('.iteminfo')

        // Remove the class "tabs-item-selected" from each element
        Array.from(items).forEach(element => { return element.classList.remove('iteminfo-show');})
        // Add a class named "tabs-item-selected" to this element
        //this.element;
        this.element.classList.add('iteminfo-show');    }
  }


//Establish class MenuLink
links = document.querySelectorAll('.memname');
console.log(links)
links.forEach(element =>  { return new NameLink(element) }
);