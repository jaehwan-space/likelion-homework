# 과제 3

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" alt="javascript">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="react"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="vite">

- 과제일: 2024년 8월 16일
- 과제 내용: 투두 리스트

---

## 과제 조건

바닐라 프로젝트 결과물 중 일부를, 리액트를 사용해 아토믹 컴포넌트로 구현하는 실습을 진행합니다.

- 모두가 접근 가능
- 의미있는 구조 설계
- 체계적인 표현 설계
- 사용자와 상호작용
- 검색 엔진 최적화
- 성능 최적화

## 디자인

![image](https://github.com/user-attachments/assets/a24a93f8-04ad-40ca-9b85-6cbe69bf11b4)  
[<u>시안보기</u>](<https://www.figma.com/design/9SL9oK3XEJ7uo6FLDMNFKu/%EC%95%84%ED%86%A0%EB%AF%B9-%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B3%BC%EC%A0%9C-(7%EC%9B%94-26%EC%9D%BC)>)

## 설명

바닐라 프로젝트때 만들었던 공통 모달창을 리액트와 타입스트립트를 사용하여 구현하였습니다.  
먼저 모듈 번들러인 vite를 사용하였으며 vite 환경 구성 중 `TypeScript + SWC` 옵션도 있어 궁금해서 찾아봤지만 뚜렷한 해답은 얻지 못 했습니다.  
기존 바닐라 프로젝트에서는 아래와 같이 매개변수를 설정하여 메인 텍스트, 버튼 텍스트, 버튼 클릭 시 실행될 함수(콜백함수)를 받았습니다.

```javascript
export default function viewModal(
  text,
  btnText1 = '확인',
  callback1 = null,
  btnText2 = null,
  callback2 = () => {}
) {
  // 모달 컨테이너 div를 생성합니다.
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modalContainer');
  modalContainer.setAttribute('role', 'dialog');
  modalContainer.setAttribute('aria-modal', true);
  modalContainer.setAttribute('aria-labelledby', 'modal-text');

  // 제공된 텍스트로 모달 콘텐츠를 생성합니다.
  modalContainer.innerHTML = `
    <div id="modalContent">
      <p id="modal-text">${text}</p>
      <div class="button-wrapper">
        <button type="button" class="modalClose btn1">${btnText1}</button>
        ${
          btnText2
            ? '<button type="button" class="modalClose btn2">' +
              btnText2 +
              '</button>'
            : ''
        }
      </div>
    </div>
  `;

  // 모달 컨테이너를 body에 추가합니다.
  document.body.appendChild(modalContainer);

  // 닫기 버튼에 이벤트 리스너를 추가합니다.
  document.querySelectorAll('.modalClose').forEach(function (btn) {
    btn.addEventListener('click', function () {
      //모달창 없애기
      document.querySelectorAll('.modalContainer').forEach(function (modal) {
        document.body.removeChild(modal);
      });

      // callback 함수 실행
      if (typeof callback1 === 'function' || typeof callback2 === 'function') {
        if (btn.classList.contains('btn1')) callback1();
        if (btn.classList.contains('btn2')) callback2();
      }
    });
  });
}
```

이 점을 생각하며 피그마로 디자인을 하였고 디자인 과정 중에 props나 auto layout을 처음 사용해서 조금 시간이 소요되었습니다.  
공통된 스타일들은 `styles`폴더에 넣어 관리하였으며 컴포넌트는 `components`폴더에 작성하였습니다.

## 결과

![image](https://github.com/user-attachments/assets/97b14f3f-cf6c-4ebc-94be-ff805166f3bc)
