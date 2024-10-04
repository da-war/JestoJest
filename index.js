const fetchData=(shouldFail=false)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(shouldFail){
                reject("error")
            }else{
                resolve("Peanut Butter")
            }
        },100)
    })
}


module.exports = fetchData;