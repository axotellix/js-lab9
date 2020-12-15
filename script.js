
/* [ TASK 1 > Object (cinema theatre`s showtimes) ] */

var weekday = new Date().getDay();      // get > current weekday

// create > cinema schedule with different theatres
const cinsched = {
    // [ cinemas ]:
    kinomax: {
        films: [
            {name: 'На острие', showtimes: [], price: 150},
            {name: 'Неадекватные люди 2', showtimes: [], price: 150},
            {name: 'Преступить черту', showtimes: [], price: 150}
        ]
    },
    illusion: {
        films: [
            {name: 'На острие', showtimes: [], price: 150},
            {name: 'Неадекватные люди 2', showtimes: [], price: 150},
            {name: 'Преступить черту', showtimes: [], price: 150}
        ]
    },

    // [ methods ]:
    //: fill object`s showtimes property
    setShowtimes(weekday, theatre, filmID) {
        let film = this[theatre].films[filmID].name;
        let sessions = showtimes[film].sessions[weekday];
        this[theatre].films[filmID].showtimes = sessions;
    },
    //: get film`s "name", "showtimes" & "ticket price"
    getFilm(theatre, filmID) {
        this.setShowtimes(weekday, theatre, filmID);
        const {name, showtimes, price} = cinsched[theatre].films[filmID];
        return [name, showtimes, price];
    }
};

//: showtimes (schedule for films)
const showtimes = {
    'На острие': {                          // film name
        sessions: [
            ['14:20', '16:30', '21:10'],    // Sunday
            ['14:20', '16:30', '21:10'],    // Monday
            ['16:30', '21:10'],             // Tuesday
            ['21:10'],                      // Wednesday
            ['14:20', '16:30', '21:10'],    // Thursday
            ['14:20', '17:50', '21:10'],    // Friday
            ['11:20', '16:30', '21:10']     // Saturday
        ]
    },
    'Неадекватные люди 2': {                // film name
        sessions: [
            ['09:15', '17:20', '22:50'],    // Sunday
            ['14:20', '16:30', '21:10'],    // Monday
            ['09:15', '17:20', '22:50'],    // Tuesday
            ['09:15', '17:20', '22:50'],    // Wednesday
            ['18:20'],                      // Thursday
            ['12:00', '18:40', '23:20'],    // Friday
            ['13:30', '17:30', '20:10']     // Saturday
        ]
    },
    'Преступить черту': {                   // film name
        sessions: [
            ['16:20', '17:50', '22:10'],    // Sunday
            ['11:20', '16:30', '21:10'],    // Monday
            ['15:20', '16:30'],             // Tuesday
            ['17:20', '20:30', '22:40'],    // Wednesday
            ['18:20', '19:30', '21:10'],    // Thursday
            ['19:20'],                      // Friday
            ['10:20', '16:30', '19:15']     // Saturday
        ]
    }
};


// get > film`s "name", "showtimes" & "ticket price"
let [name, showtime, price] = cinsched.getFilm('kinomax', 0);   //(args): "theatre", "film index"

console.group(`Сегодня в кино:`);
console.log(`Фильм "${name}"`);
console.log(`Сеансы: ${showtime.join(', ')}`);
console.log(`Цена билета: ${price}`);
console.groupEnd();
console.log('\n');



/* [ TASK 2 > Print: "last element" & "array without last" ] */

let arr = [1, 2, 3, 4, 5]; 

console.group(`Задание 2:`);

// @function > print: "last element" & "array without last"
const sliceArr = array => {
   for(let i = array.length; i > 0; i--) {
       if(i == 1) { 
           console.log(array[0]);
       } else {
           console.log(`${array.pop()}, оставшиеся элементы: ${array.join(', ')}`);
        }
   } 
};

sliceArr(arr);

console.groupEnd();
console.log('\n');



/* [ TASK 3 > Check if a string is a palindrome ] */

let str1 = "радар";     //: palindrome 
let str2 = "кукла";     //: not palindrome 

console.group(`Задание 3:`);

function checkPalindrome(str) {
    let str_first = [];  // store > first part of a string
    let str_last = [];   // store > rest part of a string

    const skip = ( str.length % 2 != 0 ) ? ( Math.ceil(str.length / 2) - 1 ) : null;

    for(let i = 0; i < str.length; i++) {
        if(i == skip) continue;
        else if(i < str.length / 2) {       // check > first part
            str_first.push(str[i]);         // save > first part in normal order
        } else {
            str_last.unshift(str[i]);       // save > reversed last part 
        }
    }
    let difference = Boolean(str_first.filter(l => !str_last.includes(l)).length);

    //: if no difference between "first" & "last" parts - palindrome
    if(!difference) console.log(`Слово ${str} - палиндром`);
    else console.log(`Слово ${str} - не палиндром`);
    
} 

checkPalindrome(str1);
checkPalindrome(str2);

console.groupEnd();
console.log('\n');





