const Monts: string[] = [
  "April",
  "June",
  "September",
  "November",
  "January",
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
    return Monts.slice(0,count)
}