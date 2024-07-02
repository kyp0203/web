# 연습문제
written_test = 75
coding_test = True

if written_test >= 80 and coding_test == True:
    print('합격')
else:
    print('불합격')
    
# 심사문제
a, b, c, d = map(int, input().split(' '))
if ((a+b+c+d)/4) >= 80:
    print('합격')
else:
    print('불합격')


# GPT's code 
math, eng, language, science = map(int, input().split(' '))

if all(0 <= score <= 100 for score in [math, eng, language, science]):  # 모든 점수가 0에서 100 사이인지 확인
    # 평균 계산
    average = (math + eng + language + science) / 4
    if average >= 80:
        print('합격')
    else:
        print('불합격')
else:
    print('잘못된 점수')
