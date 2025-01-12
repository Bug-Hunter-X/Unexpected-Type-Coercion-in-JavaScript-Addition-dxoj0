function foo(a,b){return Number(a) + Number(b);}
console.log(foo(1, "1")); // output: 2
This corrected version explicitly converts both `a` and `b` to numbers using `Number()` before performing the addition. This prevents type coercion and ensures the correct numerical result.