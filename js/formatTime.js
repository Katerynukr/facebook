function formatTime(time){

const now = Date.now();
const s = Math.round((now - time) / 1000);

//0...15s - Just now
if(s <= 15){
    return 'Just now';
}

//16..59s - [x]s ago
if(s <= 59) {
    return s + 's ago';
}

//1..59min - [x]min ago
const min = Math.floor(s / 60);
if(min <= 59){
    return min + 'min ago';
}

//1..23h - [x]hours ago
const hours = Math.floor(min / 60);
if(hours <= 23){
    return hours + 'hours ago';
}

//1..30d - [x]days ago
const days = Math.floor(hours / 24);
if(days <= 30){
    return days + 'days ago';
}

//1..11m - [x]month ago
const month = Math.floor(days / 30);
if(month <= 11){
    return month + 'month ago';
}

//y - [x]y
const year = Math.floor(days / 365.25);
    return year + 'year ago';
}

export default formatTime;