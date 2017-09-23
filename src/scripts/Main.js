export default function findGreet () {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date();
    const dayName =days[d.getDay()];
    //console.log(dayName);

    return "Happy" + "" + dayName;
}