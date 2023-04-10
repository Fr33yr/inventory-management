const Monts: string[] = [
  "April",
  "June",
  "September",
  "NovemberJanuary",
  "March",
  "May",
  "July",
  "August",
  "October",
  "December",
  "February",
];

type width = {
    count: number
}

export function Utils({count}: width){
    if(count > Monts.length || count === 0){
        return Monts
    }else{
        return Monts.slice(0,count)
    }
}