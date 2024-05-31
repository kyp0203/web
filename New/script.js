document.addEventListener('DOMContentLoaded', () => {
    /*문서의 모든 DOM 콘텐츠가 로드된 후에 실행됩니다. 
    이는 스크립트가 HTML 요소를 안전하게 조작할 수 있게 합니다.*/

    const rotatingNumber = document.getElementById('rotatingNumber'); /*ID가 'rotatingNumber'인 요소를 선택합니다.*/
    let rotation = 0; /*회전 각도를 저장하는 변수를 초기화합니다.*/

    setInterval(() => { /*주기적으로 코드를 실행*/
        rotation += 30; // 6도 시계 방향 회전, rotation 변수를 증가시킴
        rotatingNumber.style.transform = `rotate(${rotation}deg)`; //transform 속성을 사용하여 요소를 rotation시킴(deg가 각도임)        //`rotate(${rotation}deg)`는 자바스크립트의 템플릿 리터럴을 사용하여 CSS의 'transform' 속성에 회전 각도를 동적으로 삽입하는 구문
    }, 1000); // 1s마다 회전
});
