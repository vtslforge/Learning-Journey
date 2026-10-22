# Library Manager: Add, Remove, Display, Search, Count, Sort Books

books = []

while True:
    print("-----------------BOOK LIBRARY MANAGEMENT SYSTEM--------------------------\n\n")
    print("1 : Add Book")
    print("2 : Remove Book")
    print("3 : Show All Book")
    print("4 : Search Book")
    print("5 : Count Book")
    print("6 : Sort Book")
    print("7 : Exit")

    user_input = input("Choose Any: ")

#  to add book ------------------------------------------------------
    if user_input == "1":
        bookCommands = input("Enter Name Of Book: ")
        books.append(bookCommands)
        print(books)

#  to remove book from list ---------------------------------------------
    elif user_input == "2":
        bookCommands = input("Enter book name to remove: ")
        if bookCommands in books:
            books.remove(bookCommands)
            print(books)
        else:
            print("Book not found")

# display all books in list-----------------------------------------------
    elif user_input == "3":
        for booksData in books:
            print(booksData)

#  search element in index in list

    elif user_input == "4":
        bookCommands = input("Enter the book name: ")
        if bookCommands in books:
            indexData = books.index(bookCommands)
            print(f"Book found at index: {indexData}")
        else:
            print("No book found")

#  find the number of books

    elif user_input == "5":
         bookCommands = input("Enter the book name: ")
         count_data = len(books)
         print(f"Number of books are : {count_data}")

#  sort the books

    elif user_input == "6":
        bookCommands = input("Enter the book name: ")
        sorted_list = sorted(books)
        print(sorted_list)

    elif user_input == "7":
        break
