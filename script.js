let count = 0

let books = [
    {
      id: count++,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      id: count++,
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      id: count++,
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      id: count++,
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]

    const addModal = document.getElementById("add-modal")
    const changeModal = document.getElementById("change-modal")         // модальное окно изменения
    const closeModalButtChange = document.getElementById("close-change-butt")
    const closeModalButt = document.getElementById("close-modal-butt")
    const openModalButt = document.getElementById("open-modal-butt")

    function saveToLocalStorage() {                       // сохраняем в локальное хранилище браузера 
      const booksJson = JSON.stringify(books)
      localStorage.setItem('books', booksJson)
    }

    function closeModal(){
      addModal.style.display = "none"                     // в данной функции при закрывании окна, добавляем в сам div add-modal в стили add_modal значение none, тем самым закрываем модальное окно
    }

    function openModal(){
      addModal.style.display = "flex"                     // здесь происходит открытие с той же логикой
    }

    function closeChangeModal(){
      changeModal.style.display = "none"
    }

    function openChangeModal(){
      changeModal.style.display = "flex"
    }
    
    closeModalButtChange.addEventListener("click", closeChangeModal)
    //openModalButt.addEventListener("click", openChangeModal)
    closeModalButt.addEventListener("click", closeModal)
    openModalButt.addEventListener("click", openModal)

    const container = document.getElementById("container")

    function renderBooks() {   //задаём форму массива в HTML и перезаписываем массив после добовления
      container.innerHTML = ""
        books.forEach(function(book) {
            container.innerHTML += `
              <div class="book_container">
                  <img class="img_book" src="${book.image}" alt="">
                    <div class="card_items">
                      <p class="card_title">${book.title}</p>
                      <p class="card_authors">${book.authors}</p>
                      <p class="card_year">${book.year}</p>
                      <button class="butt" onclick="openChangeCard(${book.id})">Изменить</button>
                      <button class="butt" onclick="deleteBook(${book.id})">Удалить</button>
                    </div>
              </div>
            `
        })
    }

    function clearForm() {                        //очищаем input после ввода
      document.getElementById("title").value = ""
      document.getElementById("authors").value = ""
      document.getElementById("year").value = ""
      document.getElementById("image").value = ""
    }

    function deleteBook(id) {   // функционал кнопки Удалить
      const book = books.find(function(bookID){
        return bookID.id === id
      })

      const bookIndex = books.indexOf(book)

      books.splice(bookIndex, 1)

      renderBooks()
      saveToLocalStorage()
    }

const buttonAdd = document.getElementById("addBook")

    function addBook() {                                                    // добавляем в массив новые элементы
      const titleValue = document.getElementById("title").value
      const authorsValue = document.getElementById("authors").value
      const yearValue = document.getElementById("year").value
      const imageValue = document.getElementById("image").value
      //

      /*function newID(id) {
        this.created = new id;
      
        newID.count++; 
        newID.last = this.created; 
      }*/      
      
      const book = {
        id: count++,
        title: titleValue,
        authors: authorsValue,
        year: yearValue,
        image: imageValue,
        
      }
      
      
      books.push(book) 
      renderBooks()
      clearForm()
      closeModal()
      saveToLocalStorage()
    }

const buttChange = document.getElementById("addBookChange")
let idBook
let bookIndex

function changeBook() {                                                   // изменяем в массивe элементы
  const titleValueChange = document.getElementById("title-change").value
  const authorsValueChange = document.getElementById("authors-change").value
  const yearValueChange = document.getElementById("year-change").value
  const imageValueChange = document.getElementById("image-change").value
  
  const book = {
    title: titleValueChange,
    authors: authorsValueChange,
    year: yearValueChange,
    image: imageValueChange,
    id: idBook
  }

  
  
  books.splice(bookIndex, 1, book) 
  renderBooks()
  clearForm()
  closeChangeModal()
  saveToLocalStorage()
}

    function openChangeCard(id) {                             // вызов изменения карточки
      const book = books.find(function(changeID){
        return changeID.id === id
      })
      idBook = id
      bookIndex = books.indexOf(book)
      
      document.getElementById("title-change").value = book.title
      document.getElementById("authors-change").value = book.authors
      document.getElementById("year-change").value = book.year
      document.getElementById("image-change").value = book.image
      
      
      openChangeModal()
      
      
    }

       
    buttChange.addEventListener("click", changeBook)
    buttonAdd.addEventListener("click", addBook)

    const booksJson = localStorage.getItem("books")  // передаём из локального хранилища браузера сохранёную информацию
    if(booksJson) {
      books = JSON.parse(booksJson)
    }

    renderBooks()
    