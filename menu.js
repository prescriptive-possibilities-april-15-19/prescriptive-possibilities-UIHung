//scrolling resize for navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".fixedmenu").style.opacity = "0.90";
  } else {
    document.querySelector(".fixedmenu").style.opacity = "1";
  }
} 

class MenuLink {
    constructor(element) {
      // Assign this.element to the passed in DOM element
      // this.element;
      this.element = element;
      // Get the custom data attribute on the Link

      this.data = this.element.dataset.link;
  
      // Using the custom data attribute get the associated Item element
      this.menuElement = document.querySelector(`.belowbar[data-link='${this.data}']`);
  
      // Using the Item element, create a new instance of the TabItem class
      this.BelowbarLinks = new BelowbarLinks(this.menuElement);
  
  
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => this.select() );
    };
  
    select() {
        this.BelowbarLinks.select();
    }
  }

  class BelowbarLinks {
    constructor(element) {
    
      this.element = element;
    }
  
    select() {
      // Deselecting first and selecting first
        const items = document.querySelectorAll('.belowbar')
        Array.from(items).forEach(element => { return element.classList.remove('belowbar-show');})
        this.element.classList.add('belowbar-show');    }
  }

//Establish class MenuLink
links = document.querySelectorAll('.menulink');
console.log(links)
links.forEach(element =>  { return new MenuLink(element) }
);

