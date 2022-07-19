// JSON 형태로 출력
const testStringfy = {
    stringfileNum: JSON.stringify(13.1),
    stringfileString: JSON.stringify('Carnival'),
    stringfileBln: JSON.stringify(false),
    stringfileArr: JSON.stringify([2021, 2022])
};

for (let key in testStringfy){
    console.log(`------${key}------`);
    console.log(typeof testStringfy[key]);
    console.log(testStringfy[key]);
}

