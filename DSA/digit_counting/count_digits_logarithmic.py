from math import *

def countDigit(num):
    return int(log10(num) + 1)

num = int(input("Enter a number: "))
print(countDigit(num))