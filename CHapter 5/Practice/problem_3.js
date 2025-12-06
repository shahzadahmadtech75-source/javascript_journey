let numbers = [12,23,45,90,80,70,60,50]
const num = (n)=>{
    if (n%10 == 0){
        return n
    }
}
const sorted = (a,b)=>{
    return a - b
}
let t = numbers.filter(num)
let h = t.sort(sorted)
console.log(h);
