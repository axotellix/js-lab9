
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



