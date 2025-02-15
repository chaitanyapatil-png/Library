window.onload = async function() {
    note();
};        
function searchBooks() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let books = document.getElementsByClassName('book-card');
    for (let book of books) {
        book.style.display = book.innerText.toLowerCase().includes(input) ? 'block' : 'none';
    }
    
}
function note() {
    let imfo='Hello Mangrulkar, this is information about three libraries in Magrul and which books are available in each library. '
    document.getElementById('imfo').innerText = imfo;
    document.getElementById('note').innerText = '"One more thing: this information is updating every month." ';
}
function openModal(title, author, year, description, availability, department, rating, owner) {
    document.getElementById('bookTitle').innerText = title;
    document.getElementById('bookAuthor').innerText = 'Author: ' + author;
    document.getElementById('bookYear').innerText = 'Year: ' + year;
    document.getElementById('bookDescription').innerText = description;
    document.getElementById('bookAvailability').innerText = 'Availability: ' + availability;
    document.getElementById('bookDepartment').innerText = department ? 'Department: ' + department : '';
    document.getElementById('bookRating').innerText = 'Rating: ' + rating + ' ★';
    document.getElementById('bookModal').style.display = 'flex';
    document.getElementById('owner').innerText = 'Owner: ' + owner;
}
function closeModal() {
    document.getElementById('bookModal').style.display = 'none';
    document.getElementById('noteM').style.display = 'none';
    
}