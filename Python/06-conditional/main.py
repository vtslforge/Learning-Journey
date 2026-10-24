
score = int(input("Enter the number: "))

if score < 100:
    print("Low score")
elif score < 150:
    print("Good score")
elif score <= 200:
    print("Score is between 150 and 200")
else:
    print("Very good score")