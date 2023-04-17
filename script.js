const books = [
    {
      id: 1,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      id: 2,
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      id: 3,
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      id: 4,
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]

    const container = document.getElementById("container")

    function renderBooks() {   //задаём форму массива в HTML и перезаписываем массив после добовления
      container.innerHTML = ""
        books.forEach(function(book) {
            container.innerHTML += `
              <div class="user_container">
                  <img class="img_book" src="${book.image}" alt="">
                    <div class="card_items">
                      <p class="card_title">${book.title}</p>
                      <p class="card_authors">${book.authors}</p>
                      <p class="card_year">${book.year}</p>
                      <button class="butt" onclick="changeBook()">Изменить</button>
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
      const book = books.find(function(studID){
        return studID.id === id
      })

      const bookIndex = books.indexOf(book)

      books.splice(bookIndex, 1)

      renderBooks()
    }

const buttonAdd = document.getElementById("addBook")

    function addBook() {      // добавляем в массив новые элементы
      const titleValue = document.getElementById("title").value
      const authorsValue = document.getElementById("authors").value
      const yearValue = document.getElementById("year").value
      const imageValue = document.getElementById("image").value
      
      const book = {
        title: titleValue,
        authors: authorsValue,
        year: yearValue,
        image: imageValue
      }

      books.push(book) 
      renderBooks()
      clearForm()
    }

    buttonAdd.addEventListener("click", addBook)

    renderBooks()
    