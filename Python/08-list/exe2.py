# create a while loop to add element in list

games = ["doom", "cs go", "valorent", "minecraft"]
print(games)

while True:
    user_input = input("Enter the element : ")

    if user_input == "0":
        break
    
    games.append(user_input)
    print(games)


