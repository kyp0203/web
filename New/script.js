document.addEventListener('DOMContentLoaded', () => {
    const rotatingNumber = document.getElementById('rotatingNumber');
    let rotation = 0;

    setInterval(() => {
        rotation += 30; // 6도 시계 방향 회전
        rotatingNumber.style.transform = `rotate(${rotation}deg)`;
    }, 1000); // 1s마다 회전
});
