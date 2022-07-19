const str = 'To lose your path is the way to find that path';



const sensitiveCaseRegex = /to/;  
const ignoreAllCaseRegex = /to/gi;     
const findRangeRegex = /([a-f])\w+/i; 
const findAllRangeRegex = /([a-f])\w+/gi;

//g: 모든 단어를 찾음, 만일 g가 없으면 일치하는 문자만 찾음
//i: 대소문자 구분하지 않는 플래그, 만일 없으면 대소문자 구분
//\w: 모든 단어 문자와 일치 여부를 확인
//\W: 단어 문자가 아닌 문자와 불일치 여부를 확인


console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));
