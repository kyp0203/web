# 연습문제
x = [49, -17, 25, 102, 8, 62, 21]

for i in x:
    print(i*10, end=' ')
    
# 심사문제
a = int(input())

for j in range (1, 10):
    print(f"{a} * {j} = {a * j}")       # f-string
    
for j in range(1, 10):
    print(str(a) + " * " + str(j) + " = " + str(a * j))     # 문자열 연결 연산자