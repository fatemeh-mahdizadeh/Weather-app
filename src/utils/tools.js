export const convertKelvinToCelsius= (temp)=> {
    const celsiusTemp = (temp - 273).toFixed(0);
    return celsiusTemp;
}
export const percent=(number)=>{
    const rain= Math.round(number)
    return rain
     

}
export const icons =(icon,description)=>{
    const url="/assets/icons/"
    let final;
    if (icon.includes('d')) {
        const days=`${url}Day/${description}.png`
         final=days
        
    }
    if (icon.includes('n')) {
        const night=`${url}Night/${description}.png`
         final=night
        
    }
    
    return final
}
export const horse=(time)=>{
    const h=time.split(' ')
    const hh=h[1].split(':')
    const final=`${hh[0]}:${hh[1]}`
    return final


}