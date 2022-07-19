// 객체에서 키만 추출
const obj = {
    movie: 'Sunny',
    music: 'Like sugar',
    style: 'Retro',
    price: 'Infinity'
};

//const arr = Object.keys(obj); // 키만 뽑아올때
//const arr = Object.values(obj); // 값만 뽑아올때
const arr = Object.entries(obj);   //객체를 배열로 변환 (괄호안에 괄호 있는거 2차원배열 , 하나만 있으면 1차원 배열)


console.log(arr);