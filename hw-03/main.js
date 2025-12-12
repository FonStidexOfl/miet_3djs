//Задание 1
let adminName, userName;
userName = "Сова";
adminName = userName;
alert(adminName);

//Задание 2
let planetName, currentUserName;
let userRole, registrationDate; 

//Задание 3
const product = {
    name: "Шоковая стрела",
    price: 150,
};
product.category = "Способность";
product.price = 100;
console.log(product);

//Задание 4
const student = {
    name: "Чучумбер",
    age: 27,
    courses: ["Кредитология", "Банковское дело", "История моды", "Дизайн одежы"],
    adress: {
        city: "Новобогатск",
        street: "Модноприговорная",
        number: 1,
    },
};
student.courses[4] = "Основы выдачи кредитов незнающим людям";
student.adress.city = "Новокредитск";
student.courses.splice(2, 1)
student.grades = {
    Кредитология: 5,
    "Банковское дело": 5,
    "Дизайн одежды": 5,
    "Основы выдачи кредитов незнающим людям": 5,
};
console.log(`Информация о студенте:`);
console.log(`Имя: ${student.name}`);
console.log(`Возраст: ${student.age}`);
console.log(`Город: ${student.adress.city}`);
console.log(`Адрес: ул. ${student.adress.street}, д.${student.adress.number}`);
console.log(`Изучаемые курсы: ${student.courses[0]}, ${student.courses[1]}, ${student.courses[2]}, ${student.courses[3]}`);
console.log(`Оценки по курсам: {Кредитология: ${student.grades.Кредитология}, Банковское дело: ${student.grades["Банковское дело"]}, Дизайн одежды: ${student.grades["Дизайн одежды"]}, Основы выдачи кредитов незнающим людям: ${student.grades["Основы выдачи кредитов незнающим людям"]}}`);
console.log(`Кредит надо? Поздравляем вас Чучумбер! Вы настоящий мастер кредиторного дела!`);

//Задание 6
function greet(name) {
    console.log("Здравствуйте, " + name + "!");
}

function sum(a, b) {
    return a + b;
}

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function calculateArea(width, height) {
    return width * height;
}

greet("Чучумбер");
console.log(sum(2, 4));
console.log(isEven(5));
console.log(calculateArea(5, 14));