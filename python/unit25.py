# 연습문제
maria = {'korean': 94, 'english': 91, 'mathematics': 89, 'science': 83}

average = sum(maria.values())/len(maria)

print(average)

# 심사문제
a = input().split()
b = map(int, input().split())

x = dict(zip(a, b))

x.pop('delta')
x = {key: value for key, value in x.items() if value != 30}

print(x)