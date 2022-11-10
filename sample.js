
class BagPack{
    constructor(
        name,
        price,
        lidopen,
        stripLengthL,
        stripLengthR
    )
    {
        this.name=name,
        this.price=price,
        this.lidopen=lidopen,
        this.stripLength={
            left:stripLengthL,
            right:stripLengthR
        }

    }
    toggleLid(lidstatus){
        this.lidopen=lidstatus;
    }

}

const sum=function(a,b){
    let sum =a+b;
    return sum;
}
console.log(sum(1,5))

const multiply=((a,b)=>{
    let result=a*b;
    console.log(result)
})

const multi=(()=>{
    console.log("Callback function is activated")

})

const somefn=((a,b,callback)=>{
    let sum=a+b;
    console.log(sum);
    callback(a,b);
})

somefn(10,2,multiply);


console.log("Promises is going")

Element=[1,2,3];

function prom(Element){
    return new Promise(async(resolve,reject)=>{
        let sum=0;
        if(Element.length>3){
            reject("An error")
        }else{
            for(var i=0;i<Element.length;i++){
                sum=await sum+Element[i];
            }
            resolve(sum);
        }
    })
}

prom.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})



(function(){ 
    let a=10;
    let b=20;
    console.log("Immediatily involved function"+(a+b))
  })();
  const person={
    name:"AKshuy",
    age:22,
    changeAge:function(){
        return this.age;
    }
}

console.log(person.changeAge())
const skybag=new BagPack("Skybag",24,false,10,20)
skybag.toggleLid(true)
console.log(skybag)