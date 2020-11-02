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
const bookList = document.querySelector('#book-list');
const nextSibling = bookList.nextElementSibling
console.log(nextSibling);
const prevSibling = bookList.previousElementSibling
console.log(prevSibling);

// Delete Event
// This method is expensive bcos of Event Bubbling
/**const btns = document.querySelectorAll('#book-list .delete');
Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const li = e.target.parentElement
        li.parentNode.removeChild(li)
    })
})*/

// Add Event to the parent element to properly use Event Bubbling
const ul = document.querySelector('#book-list ul');

    ul.addEventListener('click',(e)=>{
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            // li.parentNode.removeChild(li) li.parentNode == ul
            ul.removeChild(li)
            
        }   
    })

//   Add to bookList using forms

// Get a form with an 'id' of add-book
const addForm = document.forms['add-book']
addForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    // Get user input
    const value = addForm.querySelector('input[type="text"]').value

    // Create elements
    const li = document.createElement('li')
    const bookName = document.createElement('span')
    const delBtn = document.createElement('span')

    // add content to elements
    delBtn.textContent = 'delete'
    bookName.textContent = value

    // Add class Name to elements
    // delBtn.setAttribute('class', 'delete')
    bookName.classList.add('name')
    delBtn.classList.add('delete')
    // append to document
    li.appendChild(bookName)
    li.appendChild(delBtn)

    // append li to DOM
    ul.appendChild(li)
})

// Hide Books
const hideBox = document.querySelector('#hide')
hideBox.addEventListener('change',()=>{
    if (hideBox.checked) {
        ul.style.display = 'none'
        
    }else{
         ul.style.display = 'initial'
    }
})