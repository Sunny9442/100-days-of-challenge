// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function Current_Date () : string {
    const now = new Date()
    const day = String (now .getDate()) . padStart (2, '0')
    const month = String (now .getMonth() + 1) . padStart (2, '0')
    const year = now.getFullYear()
    return `${day}-${month}-${year}`
}
console.log(Current_Date())