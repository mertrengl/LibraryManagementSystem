class Publication {
    constructor(title,author,id){

        if(this.constructor === Publication){
            throw new Error("Publication sınıfından doğrudan bir nesne oluşturulamaz")
        }

        this.title = title,
        this.author = author,
        this.id = id
    }
    getDetails(){
        return `${this.title}-${this.author}`   
    }
}

module.exports = Publication;

