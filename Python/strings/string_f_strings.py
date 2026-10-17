# basic string
name  = "Vatsalya singh"
city  = "banglore"
text  = "    hello this is space        "
print(name,city)

#  join strings
greetings = "Hello, " + name
print(greetings)

# length of string
print(len("hello world"))
print(len(greetings))

# basic string methods
print(name.upper())
print(name.lower())
print(name.replace("Vatsalya singh", "Aman Singh"))
print(text)
print(text.strip())

# f strings its just like template literal in js
print(f"hello my name is {name} and i once visited {city} it was beautiful")