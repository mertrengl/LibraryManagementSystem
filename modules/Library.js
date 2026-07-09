const Member = require("./Member")

class Library {
    constructor(){
        this.publications = []
        this.member = []

        this.nextPublicationID = 1      
        this.nextMemberID = 1
    }

    addPublication(publicationInstance){
        this.publications.push(publicationInstance)
        console.log(`${publicationInstance.title} kütüphaneye eklendi.`)
        
    }
    registerMember(name){
        const newMember = new Member(name, this.nextMemberID)
        this.member.push(newMember)
        this.nextMemberID++
        console.log(`${name}, ${newMember.memberID} ID'si ile üye olarak kaydedildi`)
        return newMember;
    }
    lendPublication(publicationID,memberID){
        const publication = this.publications.find(p => p.id === publicationID)
        const member = this.member.find(m => m.memberID === memberID)
        if (!publication){
            return console.log(`Hata ${publicationID} ID'li yayın bulunamadı.`)
        }
        if(!member){
            return console.log(`Hata ${memberID} ID'li üye bulunamadı.`)
        }
        if(typeof publication.isAvailable === `function`){
            if(publication.isAvailable()){
                publication.borrow()
                member.borrowBook(publication)
                console.log(`${publication.title}, ${member.name} adlı üyeye ödünç verildi.`)
            }else{
                console.log(`${publication.title} şu anda yayında değil`)
            }
        }else{
            console.log(`${publication.title} türündeki yayınlar ödünç verilemez`)
        }
    
        }
            displayPublications(){
            console.log("\n--- Kütüphanedeki Tüm Yayınlar ---")
            this.publications.forEach(pub => {
                const details = pub.getDetails()
                const status  = (typeof pub.isAvailable === "function") ? ` Durum: ${pub.isAvailable() ? `Mevcut` : `ödünç verildi`}` : ""
                console.log(``)
    
        })
    }
}
