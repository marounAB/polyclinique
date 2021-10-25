var today = new Date();
var tmp = new Date(today);
tmp.setDate(tmp.getDate()+2)

export const APPOINTMENTS = [
    {
        idDoctor: 1,
        idPatient: 1,
        idTimeSlot: 1,
        date: tmp
    },
    {
        idDoctor: 1,
        idPatient: 2,
        idTimeSlot: 3,
        date: tmp
    },
    {
        idDoctor: 1,
        idPatient: 1,
        idTimeSlot: 12,
        date: tmp
    },
    {
        idDoctor: 2,
        idPatient: 1,
        idTimeSlot: 1,
        date: tmp
    },
]