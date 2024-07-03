col, row = map(int, input().split())
matrix = []
for i in range(row):
    matrix.append(list(input()))

for i in range(col):
    for j in range(row):
        if matrix[i][j] == "*":
            continue
        elif matrix[i][j] == ".":
            cnt = 0
            for x in range(i-1, i+2):
                for y in range(j-1, j+2):
                    if 0 <= x < col and 0 <= y < row and matrix[x][y] == '*':
                        cnt += 1
            matrix[i][j] = str(cnt)

for i in matrix:
    print(''.join(i))