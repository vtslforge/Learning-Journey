number = 153
num = number
total = 0
nod = len(str(num))

while num > 0:
    digit = num % 10
    total = total + (digit ** nod)
    num = num // 10

print(total == number)