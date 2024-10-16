export const navbar=[
    {route:'/', label:'Home',id:0},
    {route:'/map', label:'Map',id:1},
    {route:'/contactus', label:'ContactUs',id:2},
    {route:'/about', label:'About',id:3}
];
const now=new Date()
const string=now.toDateString().split(' ')

export const month=string[1]
export const day=string[2]

const daysOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]; 
export const dayOfWeek = daysOfWeek[now.getDay()];
export const horse=now.getHours()
export const minutes=now.getMinutes()



        


