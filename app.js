
const Library = require("./modules/Library.js")
const Book = require("./modules/Book.js")
const  Magazine = require("./modules/Magazine.js")

const myLibrary = new Library()

//? 1. Yayınları Kütüphaneye Ekleme

console.log("\n---Kütüphaneye yeni yayınlar ekleniyor...")

const book1 = new Book("Sefiller","Victor Hugo",myLibrary.nextPublicationID++,"978-0-140-44430-8")
const book2 = new Book("1984","George Orwell",myLibrary.nextPublicationID++,"978-0-452-28423-4")
const magazine1 = new Magazine("Bilim ve Teknik","TÜBİTAK",myLibrary.nextPublicationID++,"Ağustos 2025")

myLibrary.addPublication(book1)
myLibrary.addPublication(book2)
myLibrary.addPublication(magazine1)

//? 2. Üyeleri Kaydetme 

console.log("\n---Yeni üyeler kaydediliyor...")
const member1 = myLibrary.registerMember("Mert")
const member2 = myLibrary.registerMember("Zeynep")

//? 3. İlk durum kontrolü

console.log("\n=> İşlemler öncesi kütüphane durumu")
myLibrary.displayPublications()

//? 4. Ödünç Verme Simülsayon
console.log("\n=> Simülasyonlar başlatılıyor")

// senaryo1:Başarılı ödünç alma
console.log("\n[Senaryo1]Zeynep '1984' kitabı ödünç alıyor")
myLibrary.lendPublication(2,2)

// senaryo2:Başka bir üye,zaten ödünç verilmiş bir kitabı almaya çalışıyor 
console.log("\n[Senaryo2]Mehmet '1984'adlı kitabı almaya alışıyor")
myLibrary.lendPublication(2,1)

// senaryo3:Bir üye,ödünç verilmeyen bir yayın türünü(dergi)almaya çalışıyor
console.log("\n[Senaryo3]Mehmet 'Bilim ve teknik' Dergisini almaya çalışıyor")
myLibrary.lendPublication(3,1)

// senaryo4:İlk üyenin başarılı bir şekilde farklı bir kitap alması
console.log("\n[Senaryo4]Mehmet 'Sefiller kitabını ödünç alıyor'")
myLibrary.lendPublication(1,1)

//! SON DURUMU GÖSTERME

myLibrary.displayPublications()