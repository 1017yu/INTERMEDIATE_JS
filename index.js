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


// HTML 속성 (HTML attribute)
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// elem.getAttribute('속성'): 속성에 접근하기
console.log(tomorrow.getAttribute('href'));  // https://www.codeit.kr
console.log(item.getAttribute('class'));  // item (class name)

// elem.setAttribute('속성', '값'): 속성 추가(수정)하기
tomorrow.setAttribute('class', 'list'); // 추가
link.setAttribute('href', 'https://www.codeit.kr'); // 수정

// elem.removeAttribute('속성'): 속성 제거하기
tomorrow.removeAttribute('href'); 
tomorrow.removeAttribute('class'); 


// 스타일 다루기
// elem.classList: add, remove, toggle
// 미리 만들어둔 css 클래스를 불러옴, 클래스 속성의 값을 부분적으로 수정할 때 사용
item.classList.add('done');  // item 클래스의 리스트를 추가하여 done css를 추가
item.classList.remove('done');  // 제거
item.classList.toggle('done');  // 존재하면 제거, 존재하지 않는다면 추가

// elem.className
today.children[1].className = 'done';  // 클래스 속성의 값을 통째로 변경할 때 사용 

// 스타일 입히기
item.style.opacity = '0.5';  
item.style.textDecoration = 'line-through';  // 자바스크립트로 DOM의 style 프로퍼티를 활용해서 스타일 속성을 다룰 때, 여러 단어를 하이픈(-)으로 이어서 만든 속성은 카멜표기법을 사용

item.className = 'done';

item.classList.add('done');

item.setAttribute('class', 'done'); 
// 위 네가지 방법 모두 같은 결과값을 나타냄


// 이벤트 핸들러 등록하기
let btnContent = document.querySelector('#myBtn1');

// btn.onclick = function () {
// 	console.log('Hi Codeit!');
// };

function event1() {
	console.log('Hi Codeit!');
}

function event2() {
	console.log('Hi again!');
}

// elem.addEventListener(event, handler)
btnContent.addEventListener('click', event1);  // != event1()
btnContent.addEventListener('click', event2);  // != event2()

// elem.removeEventListener(event, handler)
btnContent.removeEventListener('click', event2);


/* 
// 이벤트 버블링 (Event Bubbling)
const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');

content.addEventListener('click', function(e) {
  console.log('content Event');
  console.log(e.currentTarget);
});

title.addEventListener('click', function(e) {
  console.log('title Event');
  console.log(e.currentTarget);
});

list.addEventListener('click', function(e) {
  console.log('list Event');
  console.log(e.currentTarget);
});

for (let item of items) {
  item.addEventListener('click', function(e) {
    console.log('item Event');
    console.log(e.currentTarget);
		e.stopPropagation();  // 버블링 막기
  });
}
*/


// 이벤트 위임 (Event Delegation): 자식 요소의 이벤트를 부모 요소에 위임
const list = document.querySelector('#list');

list.addEventListener('click', function(e) {  // 부모 요소인 list에 이벤트 핸들러를 하나만 등록해주어도 모든 자식 요소의 이벤트를 다룰수 있게 됨.
	// if (e.target.tagName === 'LI')
	if (e.target.classList.contains('item')) {  // classList.contains 메소드를 사용하여 item 클래스를 확인
		e.target.classList.toggle('done');
	}
});

// 자식 요소를 추가하여도 이벤트 핸들링이 자유로이 가능
const li = document.createElement('li');  
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);  // 이벤트 버블링을 막으면 동작하지 않게됨

// 이벤트 핸들러 등록: elem.addEventListener('type', 'handler')
// 이벤트 핸들러 삭제: elem.removeEventListener('type', 'handler')
// 이벤트 객체: 이벤트가 발생하면 이벤트 핸들러의 첫 번째 파라미터에는 자동으로 이벤트 객체가 전달됨
// 이벤트 버블링: 어떤 요소에서 이벤트가 발생하면 해당 요소에 등록된 이벤트 핸들러가 동작하는 것뿐만 아니라 부모 요소로 이벤트가 계속 전파
// 이벤트 버블링 막기: stopPropagation() 메소드 사용
// 이벤트 위임: 자식 요소 각각에 이벤트 핸들러를 하나씩 등록할 필요 없이 부모 요소에서 한 번에 자식 요소들에 발생한 이벤트를 관리할 수 있음