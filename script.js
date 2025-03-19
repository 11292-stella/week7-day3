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

      const titoli1 = books[1].title
      console.log(titoli1)
      const immagine = books[1].img
      console.log(immagine)
      const prezzo1 = books[1].price
      console.log(prezzo1)

      const img = document.getElementById("img")
      const titoli = document.getElementById("titolo")
      const prezzo = document.getElementById("prezzo")
      img.src = immagine
      titoli.innerText = titoli1
      prezzo.innerText = prezzo1
    })
    .catch((err) => {
      console.log("si è verificato un errore", err)
    })
}

allTitle()
