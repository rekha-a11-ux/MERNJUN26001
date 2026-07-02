console.log("hello today we are going to cover the js ");

// fetch

// promises
let promise = new promise((resolve,reject)=>{
    // resolve("resolve");
    reject("reject")
});

console.log(promise);

promise.then((res)=>{
    console.log("resolve promise execute",res)
}).catch(()=>{
    console.log("promise reject")
})


function getData(){
    try{
       const Response=await fetch("https://jsonplacholder.typicode.com/posts");
       const data=await Response.json()
       console.log(data)
    } catch (error){

    }
    
}

