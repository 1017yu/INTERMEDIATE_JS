const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

/*
function addNewTodo(text) {
  const li = document.createElement('li');  // createElement 메소드를 활용해서 파라미터에 문자열로 li 를 전달
  li.textContent = text;  // textContent프로퍼티에 text 값을 할당
	toDoList.append(li);  // li태그를 toDoList의 마지막 자식 요소로 추가
}
*/ 

function updateToDo(event) {
  event.target.classList.toggle('done');
  // 이벤트가 발생한 대상(event.target)에 'done'이라는 클래스 속성값을 toggle(.classList.toggle('done')) 함
}
c


// 테스트 코드
/*
addNewTodo('운동하기');
addNewTodo('자바스크립트 공부하기');
addNewTodo('고양이 화장실 청소하기');
addNewTodo('토익 공부하기');
*/
// 세 번째 할일에서는 클릭을 해도 이벤트 핸들러가 동직 되지 않도록 removeEventListener 메소드 사용
items[2].removeEventListener('click', updateToDo);


toDoList.children[2].addEventListener('click', function(e) {e.stopPropagation()});
// toDoList의 2번째 자식요소에 addEventListener 메소드를 통해 'click' 클릭할 때, 
// stopPropagation으로 버블링을 막아 addEventLister의 상위 요소인 toDoList의 2번째 자식요소에 클릭 동작이 불가능
// toDoList의 자식요소 = items 
