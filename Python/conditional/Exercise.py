# --------------------------------------------------------------------
# exercise 1
# marks = int(input("Enter your Marks : "))
# if marks >= 90 :
#     print("Grade A")
# elif marks >= 75 and marks <= 89 :
#     print("Grade B")
# elif marks >= 50 and marks <= 74 :
#     print("Grade C")
# elif marks < 50 :
#     print("Fail")
# else:
#     print("something went wrong")
# ---------------------------------------------------------------------
# exercise 2

# number = int(input("Enter the number"))

# if number > 0 :
#     print("Positive")
# elif number == 0:
#     print("Zero")
# elif number < 0 :
#     print("Negative")

# ----------------------------------------------------------------------
# exercise 3

# number = int(input("Enter the number : "))

# if number % 2 == 0 :
#     print("Even")
# else:
#     print("Odd")

# ----------------------------------------------------------------------
# exercise 4

# number1 = int(input("Enter the number one : "))
# number2 = int(input("Enter the number two : "))

# if number1 > number2 :
#     print("First number is greater")
# elif number2 > number1:
#     print("Second number is greater")
# elif number1 == number2:
#     print("Both numbers are equal")

# ----------------------------------------------------------------------
# exercise 5

# username = input("Enter username :")
# password = input("Enter password :")

# if username == "admin" and password == "python123" :
#     print("Login successful")
# else :
#     print("Login Failed")

# ----------------------------------------------------------------------
# exercise 6

# number  = int(input("Enter the number :"))

# if number > 0 and number % 2 == 0 :
#     print("Positive Even")
# elif number > 0 and number % 2 != 0:
#     print("Positive Odd")
# elif number < 0 :
#     print("Negative")
# elif number == 0 :
#     print("Zero")

# exercise 7

amount = int(input("Enter amout :"))

if amount >= 5000 :
    discount = 20
    discounted_amount = amount * (discount / 100)
    print(f"you get 20 percent discount Price is {amount - discounted_amount}")
elif amount >= 2000 and amount < 5000:
    discount = 10
    discounted_amount = amount * (discount / 100)
    print(f"you get 10 percent discount Price is : {amount - discounted_amount}")
elif amount < 2000:
    print(f"not avilable for any discount Price is {amount}")