var today = new Date();
var tmp3 = new Date(today);
tmp3.setDate(tmp3.getDate()-2)
var tmp4 = new Date(today);
tmp4.setDate(tmp3.getDate()-1);
// var tmp = tmp3.toLocaleDateString();
var tmp2 = tmp4.toLocaleDateString();
var tmp = today.toLocaleDateString();
export const APPOINTMENTS = [
    {
        id: 1,
        idDoctor: 1,
        idPatient: 1,
        idTimeSlot: 1,
        date: tmp2,
        description: "lalalalala"
    },
    {
        id: 2,
        idDoctor: 1,
        idPatient: 2,
        idTimeSlot: 3,
        date: tmp,
        description: ""
    },
    {
        id: 3,
        idDoctor: 1,
        idPatient: 1,
        idTimeSlot: 12,
        date: tmp,
        description: ""
    },
    {
        id: 4,
        idDoctor: 2,
        idPatient: 1,
        idTimeSlot: 1,
        date: tmp,
        description: "lulululu"
    },
]