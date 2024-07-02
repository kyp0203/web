# 연습문제
x = int(input())

if 11<=x<=20:
    print('11~20')
elif 21<=x<=30:
    print('21~30')
else:
    print('아무것도 해당하지 않음')
    
    
# 심사문제
age = int(input())
cash = 9000
if age >= 7:
    if 7<=age<=12:
        print(cash-650)
    elif 13<=age<=18:
        print(cash-1050)
    else:
        print(cash-1250)