carsPrice = {"bmw":34234, "Honda":43243, "fariri":86352}

# print(carsPrice["fariri"],carsPrice["Honda"])

print(carsPrice.get("Honda"))
print(carsPrice.get("HIII")) # none

# updating element and adding new element
carsPrice["fariri"] = 32
print(carsPrice["fariri"]) # output 32
carsPrice["fariri"] = "maruti"

carsPrice.update({"Honda":82,"skoda":33})
print(carsPrice)

print(carsPrice.pop("bmw"))
print(carsPrice)

print("Honda" in carsPrice)

print(carsPrice.keys())
print(carsPrice.values())

for key,value in carsPrice.items():
    print(f"{key} : {value}")