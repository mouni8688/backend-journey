function x(){
    var a=7;
    function y(){
        console.log(a);
      }
      a=100;
      return y;
      a=2;
}

const z=x();
console.log(z.a);

z();