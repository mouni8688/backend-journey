console.log("Pyramid");
function Pyramid(n){
    console.log("Pyramid");
    for(let i=1;i<=n;i++){
        console.log(' '.repeat(n-i)+"*".repeat(2*i-1))
    }
}

function rightAngleTriangle(n){
    console.log("Right Angled Triangle");
    for(let i=1;i<=n;i++){
        console.log('*'.repeat(i))
    }
}

function InvertedPyramid(n){
    console.log("Inverted Suare");
    for(let i=n;i>=1;i--){
        console.log(''.repeat(n-i)+'*'.repeat(2*i-1))
    }
}

function square(n){
    console.log("Square");
    for(let i=1;i<=n;i++){
        console.log('*'.repeat(n))
    }
}

function hollowSquare(n){
    console.log("Hollow Square");
    for(let i=1;i<=n;i++){
        if(i==1 || i==n){
            console.log('*'.repeat(n));
        }else{
            console.log('*'+' '.repeat(n-2)+'*')
        }
    }
}

function numberTriangle(n){
    console.log("Number Triangle");
    for(let i=1;i<=n;i++){
        let line='';
        for(let j=1;j<=i;j++){
            line+=j;
        }
        console.log(line);
    }
}

function FloydsTriangle(n){
    console.log("Flouyds Triangle");
    let num=1;
    for(let i=1;i<=n;i++){
        let line='';
        for(let j=1;j<=i;j++){
            line+=num+' ';
            num++;
        }
        console.log(line);
    }
}
function invertedTraingle(n){
console.log("2️⃣ Inverted Right Triangle");
for (let i = n; i >= 1; i--) {
  console.log('*'.repeat(i));
}
}

Pyramid(5)
console.log('/n')
invertedTraingle(5)
console.log('/n')
FloydsTriangle(5)
console.log('/n')
numberTriangle(5)
console.log('/n')
rightAngleTriangle(5)
console.log('/n')
square(4)
console.log('/n')
hollowSquare(5)
