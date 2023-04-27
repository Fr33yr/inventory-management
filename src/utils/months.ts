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

export function Utils(count: number){
    return Monts.slice(0,count)
}