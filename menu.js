class MenuLink {
    constructor(element) {
      // Assign this.element to the passed in DOM element
      // this.element;
      this.element = element;
  
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.link;
      //console.log(this.data)
  
      // Using the custom data attribute get the associated Item element
      this.menuElement = document.querySelector(`.belowbar[data-link='${this.data}']`);
      //console.log(this.itemElement)
  
      // Using the Item element, create a new instance of the TabItem class
      this.BelowbarLinks = new BelowbarLinks(this.menuElement);
      //console.log(this.tabItem)
  
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => this.select() );
    };
  
    select() {
        this.BelowbarLinks.select();
    }
  }

  class BelowbarLinks {
    constructor(element) {
      // Assign this.element to the passed in element
      // this.element;
      this.element = element;
    }
  
    select() {
      this.element.classList.toggle('belowbar-hidden');
    }
  }


//Establish class MenuLink
links = document.querySelectorAll('.menulink');
console.log(links)
links.forEach(element =>  { return new MenuLink(element) }
);