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


// css 선택자로 태그 선택하기
const myTag2 = document.querySelector('.color-btn');
console.log(myTag2);  // 가장 첫번째 클래스를 출력

const myTag3 = document.querySelectorAll('.color-btn');
console.log(myTag3); // NodeList(8) (유사 배열) 
console.log(myTags); // HTMLCollection[8]


// 이벤트(Event)와 버튼 클릭
const myBtn = document.querySelector('#myBtn');

// 이벤트 핸들링(Event Handling)
myBtn.onclick = function() {  // 이벤트 핸들러(Event Handlier)
  console.log('Hello');
}

const grade = document.querySelector('#grade');
// const grade = document.getElementById('grade');

grade.onclick = function() {
  alert('정답입니다!👏🏻');
}