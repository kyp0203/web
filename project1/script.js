function lottonumber() {
    let randomIndexArray = [];
    while (randomIndexArray.length < 7) {
        let randomNum = Math.floor(Math.random() * 45) + 1;
        if (randomIndexArray.indexOf(randomNum) === -1) {
            randomIndexArray.push(randomNum);
        }
    }
    return randomIndexArray;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const lottoButton = document.getElementById('lottoButton');
    const resultDiv = document.getElementById('result');
    const bonusDiv = document.getElementById('bonus');

    lottoButton.addEventListener('click', () => {
        const numbers = lottonumber();
        const mainNumbers = numbers.slice(0, 6).sort((a, b) => a - b);
        const bonusNumber = numbers[6];

        resultDiv.textContent = '추첨 결과는? ' + mainNumbers.join(', ');
        bonusDiv.textContent = '보너스: ' + bonusNumber;
    });
});
