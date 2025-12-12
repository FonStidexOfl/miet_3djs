// Задание 1
const car = {
    brand: "Pagani",
    model: "Zond C12 S 7.3",
    year: 2002,
    getDescription() {
        console.log(`${this.brand} ${this.model}, выпущен в ${this.year} году.`);
    },
};
car.getDescription();

// Задание 2.1
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} была написана ${this.author} в ${this.year} году.`
    }
    static compareAge(book1, book2) {
        if (book1.year < book2.year) {
            return `${book1.title} издана раньше ${book2.title} на ${book2.year-book1.year} года (лет).`; 
        } else if (book1.year > book2.year) {
            return `${book2.title} издана раньше ${book1.title} на ${book1.year-book2.year} года (лет).`; 
        } else {
            return `${book2.title} и ${book1.title} изданы в один год.`;
        }
    }
}

const book1 = new Book("'Война и мир'", "Лев Толстой", 1869);
console.log(book1.getSummary());

// Задание 2.2
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }

    getSummary() {
        return `${this.title} было написано ${this.author} в ${this.year} году, ${this.month}`;
    }
}

const mag1 = new Magazine("'Моделист-конструктор'", "Ю.С. Столяров", 1862, "Февраль");
console.log(mag1.getSummary());

// Задание 2.3
const book2 = new Book("'Atomic Heart. Предыстория «Предприятия 3826»'", "Харальд Хорф", 2023);
console.log(Book.compareAge(book1, book2));