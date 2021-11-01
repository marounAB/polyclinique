var today = new Date();
var tmp3 = new Date(today);
tmp3.setDate(tmp3.getDate()+2)
var tmp4 = new Date(today);
tmp4.setDate(tmp3.getDate()+1);
var tmp = tmp3.toLocaleDateString();
var tmp2 = tmp4.toLocaleDateString();

export const APPOINTMENTS = [
    {
        id: 1,
        idDoctor: 1,
        idPatient: 1,
        idTimeSlot: 1,
        date: tmp2
    },
    {
        id: 2,
        idDoctor: 1,
        idPatient: 2,
        idTimeSlot: 3,
        date: tmp
    },
    {
        id: 3,
        idDoctor: 1,
        idPatient: 1,
        idTimeSlot: 12,
        date: tmp
    },
    {
        id: 4,
        idDoctor: 2,
        idPatient: 1,
        idTimeSlot: 1,
        date: tmp
    },
]