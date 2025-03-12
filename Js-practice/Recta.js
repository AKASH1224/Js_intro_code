function rectAngl(a,b){
this.length= a;
this.width= b;
this.perimeter= 2 *(a+b);
this.area =a*b;
}
const rect1 = new rectAngl(4,5)
console.log(rect1)