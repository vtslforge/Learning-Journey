games = ["doom", "cs go", "valorent", "minecraft"]

# printing length of list
print(len(games))
# printing elements in list using loop
for gname in games:
    print(gname)
# printing through length
print(games[1])
print(games[-2])
# slicing in list (start : stop)
print(games[1:3])
# changing elements in list
games[2] = "cyberpunk 277"
print(games[2],games)
# appending an element in the end
games.append("Sakiro")
print(games)
# adding item according to index (index, element)
games.insert(2,"elden ring")
print(games)
# removing an element based on first matching element
games.remove("minecraft")
print(games)
# to remove the last element in the index
last_item = games.pop()
print(last_item, games)
