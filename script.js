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

      const titoli = books.books.title
      console.log(titoli)
    })
}

allTitle()
