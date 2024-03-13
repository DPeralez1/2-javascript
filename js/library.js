class Book {
    constructor(title,author,available = true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }
}

const library = {
    books: [],
    
    addBook: function(title, author) {
        const book = new Book (title, author);
        this.books.push(book); 
        console.log(`Added "${book.title}" by ${book.author} to the library! There are now ${this.books.length} books in the librarys's database.`)
    },

    checkOutBook: function(title) {
        for (let book of this.books) {
            if (book.title === title && book.available) {
                found = true;
                book.available = false;
                console.log('Checked out: ${book.title}')
                break;
            }
        }
    },

    getAvailableBooks: function () {
        let bookList = []
        for (let book of this.books) {
            if (book.available) {
                bookList.push(book.title);
            }
        }
        console.log(`Ther are ${bookList.length} titles currently on the shelf: ${bookList.join(",")}`);
    }
}


const newBooks = 
    `[]`;

    function receiveBooks(bookData) {
        console.log(`Adding new books to our shelves!`);
        const booksToAdd = JSON.parse(bookData);
        for (let book of booksToAdd) {
            library.addBook(book.title, book.author);
        }
    }
