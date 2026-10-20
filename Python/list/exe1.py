games = ["doom", "cs go", "valorent", "minecraft"]
print(games)
findElement = input("Enter the element : ")

if findElement in games :
    games.remove(findElement)
    print("element removed")
    print(games)
else:
    print("not found")