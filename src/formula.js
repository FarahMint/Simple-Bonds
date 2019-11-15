export const formula = (amount, interest, duration)=>{

    let pence = amount / 100;
    return pence +(pence * interest /12 ) * duration;
}
