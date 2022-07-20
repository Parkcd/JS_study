function promiseForHomework(mustDo) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('doing homework');
            if(mustDo){
                resolve({
                    result: 'homework-result'
                });
            }else{
                reject(new Error('Too lazy'));
            }
        }, 3000);

    });
};

const promiseA = promiseForHomework(true);
console.log('promiseA created');

const promiseB = promiseForHomework();
console.log('promiseB created');

promiseA.then(v => console.log(v));
promiseB
    .then(v => console.log(v)) //.을 아래로찍어서 쓰면은 체인식이라 함(요즘 유행)
    .catch(e => console.error(e));