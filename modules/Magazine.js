const Publication = require("./Publication.js")

class Magazine extends Publication{
    constructor(title,author,id,issueDate){
        super(title,author,id)
        this.issueData = issueDate 
    }
    getDetails(){
        const baseDetails = super.getDetails()
        return `${baseDetails} [Dergi] (Sayı: ${this.issueData})`
    }
}

module.exports = Magazine