const array = [12, 12, 34, 5];
//.reduce(accumulatorFunction,initialValue);
//AcumulatorFunction Use two Parameters.
// const sum=array.reduce((previus,current)=>previus+current,0);
const sum = array.reduce((previus, current) => {
    // console.log(previus, current);
    return previus + current;
}, 0);
//console.log(sum);
const student = {
    id: 201830625,
    name: 'Abu Hanif',
    subject: ['Math', 'Physics', 'chamisty'],
    marks: {
        math: 80,
        physics: 70,
        chamisty: 79
    }
}

// console.log(student['marks'].math);
console.log(student['marks']['math']);