const allTitle = function () {
  const titleURL = "https://striveschool-api.herokuapp.com/books"

  fetch(titleURL)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Errore nel trovare i titoli")
      }
    })
    .then((books) => {
      console.log(books)

      const bookCardsContainer = document.getElementById("book-cards")

      books.forEach((book) => {
        const card = document.createElement("div")
        card.classList.add("col-12", "col-sm-6", "col-md-3")

        card.innerHTML = `
  <div class="card" ">
    <img src="${book.img}" class="card-img-top" alt="${book.title}" />
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">${book.price}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
`
        bookCardsContainer.appendChild(card)
      })
    })
    .catch((err) => {
      console.log("si è verificato un errore", err)
    })
}

allTitle()
