var today = new Date();
var tmp = new Date(today);
tmp.setDate(tmp.getDate()+2)
var tmp2 = new Date(today);
tmp2.setDate(tmp.getDate()+1)

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