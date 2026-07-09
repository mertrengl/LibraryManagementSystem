class Member {
    constructor(name,memberID){
        this.name = name
        this.memberID = memberID

        this.borrowedBooks = []
    }
    borrowedBook(publication){
        this.borrowedBooks.push(publication)
    }
    returnBook(publicationID){
        this.borrowedBook = this.borrowedBook.filter(pub => pub.id !== publicationID)
    }
}

module.exports = Member