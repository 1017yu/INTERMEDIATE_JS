const toDoList = document.querySelector('#to-do-list');

function addNewTodo(text) {
  const li = document.createElement('li');  // createElement 메소드를 활용해서 파라미터에 문자열로 li 를 전달
  li.textContent = text;  // textContent프로퍼티에 text 값을 할당
	toDoList.append(li);  // li태그를 toDoList의 마지막 자식 요소로 추가
}

// 테스트 코드
addNewTodo('자바스크립트 공부하기');
addNewTodo('고양이 화장실 청소하기');
addNewTodo('고양이 장난감 쇼핑하기');