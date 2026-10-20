# for letter in "hello" :
#     print(letter)


# #  here it will start at 0 and end before 3 if range is used
# #  range(start, stop)
# for num in range(3) :
#     print(num)

# #  range(start, stop)
# for num1 in range(1,7) :
#     print("range :", num1)


# for number in range(1,8):
#     print("number : : : ",number)
#     if number == 5 :
#         print(f"number {number}")
#         break;

# continue skips the number 1 2 3 
for number in range(1, 8):
    if number == 3:
        # print(f"number {number}")
        continue

    print("number continue:", number)

# for number in range(1,8):
#     if number == 2 :
#         print(f"number {number}")
#         pass # placeholder for future code
#     print("number pass : ",number)