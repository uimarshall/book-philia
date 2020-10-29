let books = document.querySelectorAll('#book-list li .name')

Array.from(books).forEach((book)=>{
    console.log(book.textContent);

})

// THE CONCEPT OF NODES IN A DOM
// ****************************************

/** In the DOM, every element is a node.
- A comment is a node
- An attribute such as 'id' is a node
- A text inside a tag is a node*/
// *****************************************

const banner = document.querySelector('#page-banner')
console.log(banner.nodeName)
console.log(banner.nodeType)

// Cloning a Node
const clonedBanner = banner.cloneNode(true)
console.log(clonedBanner);