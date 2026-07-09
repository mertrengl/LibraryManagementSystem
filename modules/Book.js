const Publication = require("./Publication.js")

class Book extends Publication{
    #isBorrowed = false//class dışında kullanılmasını ve erişilmesini istemediğimiz özellikleri private yapabiliriz.
    constructor(title,author,id,ISBN){
        super(title,author,id)
        this.ISBN = ISBN
    }
    borrow(){
        this.#isBorrowed = true
    }
    returnBorrow(){
        this.#isBorrowed = false
    }
    isAvailable(){
        return !this.#isBorrowed
    }
    getDetails(){
        return`${super.getDetails()} (Kitap, ISBN: ${this.ISBN})`
    }
}

module.exports = Book;