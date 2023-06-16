// const obj={
//     name:"gajendra",
//     printName:function(b){
//         console.log(this.name+b)
//     }
// }
// const obj1={
//     name:"anuj",

// }
// // obj.printName.call(obj1,"ff","ff")
// // obj.printName.apply(obj1,["fff","fff"])
// let binds=obj.printName.bind(obj1,'k')
// binds()

function* number(){
    let i=0;
    while(true){
        yield i++;
    }
}
console.log(number().next());
console.log(number().next());
