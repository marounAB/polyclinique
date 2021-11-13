var today = new Date();
var tmp1 = new Date(today);
tmp1.setDate(tmp1.getDate()+1)
tmp1 = tmp1.toLocaleDateString();
var tmp2 = new Date(today);
tmp2.setDate(tmp2.getDate()+2);
tmp2 = tmp2.toLocaleDateString();
var tmp3 = new Date(today);
tmp3.setDate(tmp3.getDate()+3);
tmp3 = tmp3.toLocaleDateString();
var tmp4 = new Date(today);
tmp4.setDate(tmp4.getDate()+4);
tmp4 = tmp4.toLocaleDateString();

export const AVAILABILITIES = [
    {
        id: 1,
        idDoctor: 1,
        date: tmp1,
        startTime: "9:00",
        endTime: "14:00",
    },
    {
        id: 2,
        idDoctor: 2,
        date: tmp1,
        startTime: "9:30",
        endTime: "16:00",
    },
    {
        id: 3,
        idDoctor: 1,
        date: tmp2,
        startTime: "9:00",
        endTime: "13:30"
    },
    {
        id: 4,
        idDoctor: 1,
        date: tmp2,
        startTime: "15:00",
        endTime: "17:00"
    },
    {
        id: 5,
        idDoctor: 1,
        date: tmp3,
        startTime: "14:00",
        endTime: "17:00"
    },
    {
        id: 6,
        idDoctor: 1,
        date: tmp4,
        startTime: "9:30",
        endTime: "15:00"
    }
]