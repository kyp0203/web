# 연습문제
i = 0
while True:
    if i % 10 !=3: #3으로 끝나는 숫자를 구하려면 i를 10으로 나누고 나머지가 3인지 검사함
        i+=1       #3으로 끝나는 숫자가 아니면 1을 더하고
        continue   #건너뜀
    if i > 73:
         break
    print(i, end=' ')
    i += 1
    
# 심사문제
start, stop = map(int, input().split())

i = start

while True:
    if i % 10 ==3:
        i+=1
        continue
    if i > stop:
        break
    print(i, end=' ')
    i += 1