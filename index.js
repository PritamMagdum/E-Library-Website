console.log("This is index.js");

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {
    console.log("We are adding your book please wait");
    // alert("Book Added Successfully")

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    let tableBody = document.getElementById('tableBody');
    console.log("adding to UI");

    let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2 || book.type.length < 0) {
        return false;
    } else {
        return true;
    }
}

Display.prototype.message = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Message: </strong>${displayMessage}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

    setTimeout(function () {
        message.innerHTML = '';
    }, 4000);
}

// Add Book
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', submitLibraryForm);

function submitLibraryForm(e) {
    console.log("Your Book is added Successfully");
    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let loveStory = document.getElementById('loveStory');
    let programming = document.getElementById('programming');

    if (fiction.checked) {
        type = fiction.value
    } else if (loveStory.checked) {
        type = loveStory.value
    } else if (programming.checked) {
        type = programming.value
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.message('success', 'Book Added Successfully!');
    } else {
        // error message shows if user not entered anything and he is trying to submit
        display.message('danger', 'Your Book is not Added, Something you are missing please fill!');
    }

    e.preventDefault();

}

/*
Task -
1) Store the all data into localStorage
2) Add delete button in book list
3) Add a scroll bar to the view
4) Convert protocol to ES6 version (Create a new js file in write a ES6 version code for this project)
*/
