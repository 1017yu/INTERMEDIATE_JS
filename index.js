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
  alert('정답입니다!👏🏻');  // 경고창
}


// Window : 전역객체 (Global Object)
console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);


// DOM(Document Object Model) : JavaScript를 통해 html 태그를 객체처럼 자유롭게 다룸
console.log(document);

// DOM 트리 연습하기
const myDomTag = document.querySelector('#list-1');

console.log(myDomTag);

// 형제 요소 노드
console.log(myDomTag.previousElementSibling);  // 이전 형제 요소 하나
console.log(myDomTag.nextElementSibling);  // 다음 형제 요소 하나

// 부모 요소 노드
console.log(myDomTag.parentElement);

// 자식 요소 노드
console.log(myDomTag.children);  // 자식 요소 모음(HTMLCollection)  
console.log(myDomTag.firstElementChild);  
console.log(myDomTag.lastElementChild);


// 요소 노드 주요 프로퍼티
const myNodeTag = document.querySelector('#list-1');

// 1. innerHTML : 요소 노드 내부의 HTML 코드를 문자열로 리턴, 내부 HTML 자체를 수정할 때 활용
console.log(myNodeTag.innerHTML);   
/* myNodeTag.innerHTML += '<li>Exotic</li>'; */

// 2. outerHTML : 요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴, 새로운 값을 할당할 경우 요소 자체가 교체됨
console.log(myNodeTag.outerHTML);

// 3. textContext : 요소 안의 내용들 중에서 HTML 태그 부분은 제외하고 텍스트만 가져옴
console.log(myNodeTag.textContent); 


// 요소 노드 추가하기
const today = document.querySelector('#today');

// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');
const last = document.createElement('li');
const before = document.createElement('p');

// 2. 요소 노드 꾸미기: textContext, innerHTML, ...
first.textContent = '처음';
last.textContent = '마지막';
before.textContent = '이전';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
today.prepend(first);
today.append(last);
today.before(before);
today.after('다음');


// 노드 삭제하기: NODE.remove();
// tommorow.remove();

// 노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[1]);
tomorrow.children[0].after(today.children[2]);
