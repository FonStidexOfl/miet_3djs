// Задание 1
const originalArray = [1, 2, 3, 4, 5, 6];
const evenArray = originalArray.filter((number) => {
    return number % 2 == 0;
});
console.log(evenArray)

// Задание 2
const reverseArray = (n) => {
    if (n < 1 || !Number.isInteger(n)) {
        console.log("Error");
    } else while (n > 0) {
        console.log(n);
        n--;
    }
};
reverseArray(10)

// Задание 3
const agentName = ["Чучумбер", "Сага", "Совунья", "Шляпник"];
const lengths = agentName.map((word) => {
    return word.length;
});
console.log(lengths);

// Задание 4
const tankNicknames = [
    "Бабаха",
    "Ёлка",
    "Дед седьмой",
    "Стерва",
    "Блоха",
    "Мышь",
    "Гриль",
    "Вафля",
];
function whatToPlayOn(array) {
    array.forEach((tank, i) => {
        console.log(`${i + 1}. ${tank}`)
    });
}
console.log("На каком танке мне стоит сыграть?");
whatToPlayOn(tankNicknames);

// Задание 5
function filterGreaterThan(arr, n) {
    return arr.filter((number) => number > n);
}
console.log(filterGreaterThan([10, 20, 30, 40, 50], 25));