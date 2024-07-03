# 연습문제
a = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'india']
b = [i for i in a if len(i)==5]

print(b)

# 심사문제
x, y = map(int, input().split())
a = [2 ** i for i in range(x, y+1)]
del a[1]
del a[-2]
print(a)