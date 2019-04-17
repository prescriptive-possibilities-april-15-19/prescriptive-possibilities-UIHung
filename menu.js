//scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".fixedmenu").style.padding = "10px 0px";
    document.querySelector(".belowbar-show").style.marginTop = "75px";
  } else {
    document.querySelector(".fixedmenu").style.padding = "30px 0px";
    document.querySelector(".belowbar-show").style.marginTop = "115px";

  }
} 

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
    const items = document.querySelectorAll('.belowbar')

        // Remove the class "tabs-item-selected" from each element
        Array.from(items).forEach(element => { return element.classList.remove('belowbar-show');})
        // Add a class named "tabs-item-selected" to this element
        //this.element;
        this.element.classList.add('belowbar-show');    }
  }


//Establish class MenuLink
links = document.querySelectorAll('.menulink');
console.log(links)
links.forEach(element =>  { return new MenuLink(element) }
);

