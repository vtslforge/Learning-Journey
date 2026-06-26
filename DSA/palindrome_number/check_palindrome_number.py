n = 121
num = n
result = 0

while num > 0:
    id = num % 10
    result = (result * 10) + id
    num = num // 10

print(n == result)


"""
Starting State
--------------
n = 121
num = 121
result = 0


Iteration 1
-----------
Before:
    num = 121
    result = 0

Step 1: Extract last digit
    digit = 121 % 10 = 1

Step 2: Build result
    result = (0 * 10) + 1 = 1

Step 3: Remove last digit
    num = 121 // 10 = 12

After Iteration 1:
    num = 12
    result = 1


Iteration 2
-----------
Before:
    num = 12
    result = 1

Step 1: Extract last digit
    digit = 12 % 10 = 2

Step 2: Build result
    result = (1 * 10) + 2 = 12

Step 3: Remove last digit
    num = 12 // 10 = 1

After Iteration 2:
    num = 1
    result = 12


Iteration 3
-----------
Before:
    num = 1
    result = 12

Step 1: Extract last digit
    digit = 1 % 10 = 1

Step 2: Build result
    result = (12 * 10) + 1 = 121

Step 3: Remove last digit
    num = 1 // 10 = 0

After Iteration 3:
    num = 0
    result = 121


Final Check
-----------
n == result → 121 == 121 → True
"""