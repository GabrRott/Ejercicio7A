const toDay = new Date();

const birth = new Date(1984, 2, 17);

const toDayAfterBirth = birth.getTime() < toDay.getTime();


const dayBirth = birth.getDay();
const monthBirth = birth.getMonth()+1;
const yearBirth = birth.getFullYear();


console.log(birth);


