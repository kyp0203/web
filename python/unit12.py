# 연습문제
camille = {
    'health': 575.6,
    'health_regen': 1.7,
    'mana': 338.8,
    'mana_regen': 1.63,
    'melee': 125,
    'attack_damage': 60,
    'attack_speed': 0.625,
    'armor': 26,
    'magic_resistance': 32.1,
    'movement_speed': 340
}
 
print(camille['health'])
print(camille['movement_speed'])

# 심사문제
x = input().split()
y=map(float, input().split())
lux=dict(zip(x,y))            # x,y를 입력받아 리스트 생성
print(lux)                    # zip함수가 x, y 리스트의 동일한 인덱스에 있는 요소들을 튜플로 묶어줌
                              # zip(x,y)의 결과를 dict()에 전달하면 딕셔너리가 생성됨