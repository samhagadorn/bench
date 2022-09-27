// How Many Days Between Two Dates (JavaScript)
// Create a function that takes two dates and returns the number of days between the first and second date.

// Examples

// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// ) ➞ 6

// getDays(
//   new Date("December 29, 2018"),
//   new Date("January 1, 2019")
// ) ➞ 3
// // Dates may not all be in the same month/year.

// getDays(

//  new Date("July 20, 2019"),
//   new Date("July 30, 2019")
// ) ➞ 10

function getDays(dayA, dayB){

    let dateA = Date.parse(dayB)
    let dateB = Date.parse(dayA)
    
    let days = (dateB<dateA? dateA-dateB : dateB - dateA)/86400000

    return days
}

console.log(getDays("July 20, 2019", "July 30, 2019"))

console.log(getDays("July 20, 2020", "July 30, 2019"))
