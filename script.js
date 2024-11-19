let isValidDate = (dateString) =>
{
    let dateArr = dateString.split("/");
    let newDate = `${dateArr[1]}/${dateArr[0]}/${dateArr[2]}`;
    const date = new Date(newDate);
    const [month, day, year] = newDate.split("/").map(Number);
    if (!(date instanceof Date) || isNaN(date))
        return (false);
    return (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day);
}

let timeFormatEu = (dateStringNa) =>
{
    let newDate = dateStringNa.split("-");
    return (`${newDate[2]}/${newDate[1]}/${newDate[0]}`);
}

let isPalindrome = (string) =>
{
    const size = string.length;
    const partOne = string.slice(0, size / 2);
    let partTwo = "";
    if (string.length % 2 === 1)
        partTwo = string.slice(size / 2 + 1, size).split("").reverse().join("");
    else
        partTwo = string.slice(size / 2, size).split("").reverse().join("");
    return (partOne === partTwo);
}

let isDatePalindrome = (dateString) =>
{
    let dateArr = dateString.split("/").join("");
    return (isValidDate(dateString) && isPalindrome(dateArr));
}

let getNextPalindrome = (x) =>
{
    let currentDate = new Date();
    for (let i = 0; i < x;) {
        let currentDateString = timeFormatEu(currentDate.toISOString().split('T')[0]);
        if (isDatePalindrome(currentDateString) === true) {
            console.log(currentDateString);
            i++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

getNextPalindrome(8);
