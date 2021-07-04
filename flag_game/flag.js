const flagBlue = document.querySelector('.flag-blue');
const flagWhite = document.querySelector('.flag-white');

function reset() {
  document.querySelector('.up').classList.remove('up');
}

// 1. flagUp 함수
function flagUp(e) {
  if (e.button === 0) {  // button 프로퍼티가 0일 때(마우스 왼쪽 버튼을 누를 때)
    flagBlue.classList.add('up')  // flagBlue에 up 클래스를 추가
  }
  else if (e.button === 2) {  // button 프로퍼티가 2일 때(마우스 오른쪽 버튼을 누를 때)
    flagWhite.classList.add('up')  // flagWhite에 up 클래스를 추가
  }

  // 500 밀리초 뒤에 reset함수를 실행
  setTimeout(reset, 500);
}

// 2. 마우스 오른쪽 버튼 클릭시 나타나는 메뉴창 막기
document.addEventListener('contextmenu', function (event) {  // 'contextmenu' = 마우스 우클릭 이벤트
  event.preventDefault();  // 이벤트 객체의 preventDefault 메소드를 사용
});

// 테스트 코드
document.addEventListener('mousedown', flagUp);  // mousedown 이벤트 시 flagUp 함수 핸들