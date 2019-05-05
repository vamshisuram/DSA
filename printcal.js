// December 2018
// Su Mo Tu We Th Fr Sa  
//                    1  
//  2  3  4  5  6  7  8  
//  9 10 11 12 13 14 15  
// 16 17 18 19 20 21 22  
// 23 24 25 26 27 28 29  
// 30 31


function printCalendar() {
    // given dateObject instance
    // const dateObj = new Date("01/12/2019");


	// month name, year
    // console.log(`${dateObj.getMonthName()  } ${  dateObj.getYear()}`);  // O(1)
    console.log("December 2018");

	// print week
    const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];    // O(1)
    console.log(week.join("\t"));  // O(7)

	// print days
    const offset = 6; // dateObj.getDay(); // dateObj.getDayOfWeek(); // O(1)
    const offsetArr = (new Array(offset)).fill("");   // O(6)

    const totalDays = 31; // dateObj.getDaysInMonth();   // O(1)
    let totalDaysArr = (new Array(totalDays)).fill("");  // O(n)
    totalDaysArr = totalDaysArr.map((_, index) => index + 1);    // O(n)
    const monthArr = [...offsetArr, ...totalDaysArr];    // O(6+n)

    while (monthArr.length > 7) {           // O(4)
        const week = monthArr.splice(0, 7);     // O(2) creation + O(7) + O(n-7)
        console.log(week.map(item => item < 10 ? " " + item : item).join("\t"));			// O(7)
    }
    console.log(monthArr.join("\t"));         // O(6)
}

printCalendar();
