// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//////////////////////////////////////////////////////////////////////////////////////////
// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr);
// console.log(arr[0]);
//////////////////////////////////////////////////////////////////////////////////////////
// let box = {
//     title : '',
//     pageCount : '',
//     genre : '',
//     authors : [ name, age ]
// }
//////////////////////////////////////////////////////////////////////////////////////////
// let Користувач = [
//     {name : `OLeh`, username : `Maksymiuk`, password:1},
//     {name : `OLeh1`, username : `Maksymiuk1`, password:11},
//     {name : `OLeh2`, username : `Maksymiuk2`, password:12},
//     {name : `OLeh3`, username : `Maksymiuk3`, password:13},
//     {name : `OLeh4`, username : `Maksymiuk4`, password:14},
//     {name : `OLeh5`, username : `Maksymiuk5`, password:15},
//     {name : `OLeh6`, username : `Maksymiuk6`, password:16},
//     {name : `OLeh7`, username : `Maksymiuk7`, password:17},
//     {name : `OLeh8`, username : `Maksymiuk8`, password:18},
//     {name : `OLeh9`, username : `Maksymiuk9`, password:19},
// ]
// console.log(Користувач[0]["password"]);
// console.log(Користувач[1]["password"]);
// console.log(Користувач[2]["password"]);
// console.log(Користувач[3]["password"]);
// console.log(Користувач[4]["password"]);
// console.log(Користувач[5]["password"]);
// console.log(Користувач[6]["password"]);
// console.log(Користувач[7]["password"]);
// console.log(Користувач[8]["password"]);
// console.log(Користувач[9]["password"]);
///////////////////////////////////////////////////////////////////////////////////////////
// let x = 3
// if (x!==0){
//     console.log(`Вірно`);}
//     else {
//     console.log(`Невірно`);
// }
//////////////////////////////////////////////////////////////////////////////////////////
// let title = +prompt(`Котра година?`);
// let title = 48;
// switch ( title ){
//     case (title>=0 && title <= 15):
//         console.log(1);
//         break;
//     case (title>15 && title <= 30):
//         console.log(2);
//         break;
//     case  (title>30 && title <= 45) :
//         console.log(3);
//         break;
//     case (title>45 && title <=59):
//         console.log( 4);
//         break;
//     default:{
//         console.log(`????????.`)
//         }
// }
//////////////////////////////////////////////////////////////////////////////////////
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).ду
let HW = 5;
switch (HW){
    case 1 :
        console.log(`mn`); break;
    case 2  :
        console.log(`tw`);break;
    case 3 :
        console.log(`wn`);break;
    case 4 :
        console.log(`Fozdey`);break;
    case 5 :
        console.log(`wWWW`);break;
    case 6 :
        console.log(`son`);break;
    case 7 :
        console.log(`Sann`);break;
    default:{

        console.log(`??????.`);break;
    }

}