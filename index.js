// id로 태그 선택하기
const myTag = document.getElementById('myNumber');  // getElementById 메소드를 통해 'myNumber' Id의 element를 선택
console.log(myTag);  // <div id>="myNumber">0</div>

const nullTag = document.getElementById('abc123');  // 만약 html에 존재하지않는 태그를 불러오면
console.log(nullTag);  // undefined가 아닌 null이 출력됨


// class로 태그 선택하기
const myTags = document.getElementsByClassName('color-btn');
console.log(myTags);  // HTMLCollection[8] (유사 배열) (배열과 유사한 객체임)
console.log(myTags[1]);  // <button class="color-btn orange" data-color="#FFA500"></button>

const emptyHTMLCollection = document.getElementsByClassName('abc123');  // 존재하지 않는 클래스를 불러오면
console.log(emptyHTMLCollection);  // null이 아닌 빈 HTMLCollection이 출력됨