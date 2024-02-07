// Define time data
var timeData = [
    { startTime: '00:00', endTime: '11:59', h1: '슬라맛 빠기', p: '좋은 아침이에요!' },
    { startTime: '12:00', endTime: '12:59', h1: '슬라맛 뜽하 하리', p: '좋은 점심이에요!' },
    { startTime: '13:00', endTime: '18:59', h1: '슬라맛 쁘당', p: '좋은 오후에요!' },
    { startTime: '19:00', endTime: '23:59', h1: '슬라맛 말람', p: '좋은 저녁이에요!' },
];

function compareTime(time1, time2) {
    var t1 = time1.split(':');
    var t2 = time2.split(':');

    var d1 = new Date();
    var d2 = new Date();

    d1.setHours(parseInt(t1[0], 10));
    d1.setMinutes(parseInt(t1[1], 10));
    d2.setHours(parseInt(t2[0], 10));
    d2.setMinutes(parseInt(t2[1], 10));

    return (d1 <= d2);
}

function updateTime() {
    var now = new Date();
    var currentTime = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();

    for (var i = 0; i < timeData.length; i++) {
        if (compareTime(timeData[i].startTime, currentTime) && compareTime(currentTime, timeData[i].endTime)) {
            document.getElementById('greeting').textContent = timeData[i].h1;
            document.getElementById('subtitle').textContent = timeData[i].p;
            break;
        }
    }
}

// Update time initially
updateTime();

// Update time every minute
setInterval(updateTime, 60000);