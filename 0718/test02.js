// 배열의 길이 구하기
const ship = {
    max: 4,
    passengers: [],
    onBoard: function(name){
        if(this.passengers.length === 2){ //=== 3개는 비교를 할때 속성까지 비교 문자4 , 숫자4 ...
            console.log(`this ship full. ${name} can not board this ship.` );
        }else{
            this.passengers.push(name);
            console.log(`${name} board`);

        }
    }
}

ship.onBoard('chole');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');
ship.onBoard('chole');
console.log(ship.passengers);