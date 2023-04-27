const Monts: string[] = [
  "Apr",
  "Jun",
  "Sep",
  "Nov",
  "Jan",
  "Mar",
  "May",
  "Jul",
  "Aug",
  "Oct",
  "Dec",
  "Feb",
];

type width = {
    count: number
}

export function Utils({count}: width){
    return Monts.slice(0,count)
}