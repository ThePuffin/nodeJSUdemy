let somePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Hey, it worked !')
        reject('unable to fulfill promise !')
    }, 2500)
    
});

somePromise.then((message)=>{
    console.log(('Success',message ));
}, (errorMessage)=> {
    console.log('error :', errorMessage);
})