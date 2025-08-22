#list
fruits = ["apple", "banana", "cherry"]
print(fruits[0], type(fruits[0]))

employee  =  {"Name" : "Shie", "Age" : 20}
print (employee ["Name"], type(employee ["Name"]))

#integer data type
s = 5 
c  = 18 
print(s+c, type(s+ c))

#float  data type
m = 18.05
n = 3.11
print(m + n, type(m + n))

#complex data type
b = 3 + 5j
a = 4 + 6j
print(b + a, type(b + a))

#boolean data type
acc_favo = True
if acc_favo:
    print("Tiktok is my favorite app", type(acc_favo))

#tulpe data type
point = (10, 20)
print(point, type(point))

#string data type
lala = "Shie"
print(lala, type(lala))

#set data type
fruits = { "apple", "kiwi", "mango", "cherry"}
print(fruits, type(fruits))

#dictionary data type
employee  =  {"Name" : "Shie", "Age" : 21}
print (employee ["Name"], type(employee ["Name"]))


#empty or null / none data type
Id = None
if Id is None :
    print (Id)
    
#frozenset

names = {"Shiela", "Cris", "Domingo", "Baloloy"}
frozenset ="haha"
print(names ,frozenset ,(type(names)))

year = {2001 , 2004 }
year.append = 2025
print(year, type(year))


student_name = "Nhalie"
student_age = 20

print("Hi I am", student_name, "and I am", student_age, "years old.")


x = 15 
y = 4

print(x+y)
print(x-y)
print(x*y)      
print(x/y)
print(x%y)


number = 15

if number  %  2 == 0:
    print("IT'S EVEN!")
else:
    print("IT'S ODD!")
    
    
for c in range(1,11):
    print("numnum", c)


num = 18
def square(num):
    return num * num
def cube(num):
    return num * num * num
print(square(num))
print(cube(num))

numero = 33
def hehe(numero):
    for c in range(1, numero + 1):
        if c % 2 == 0:
            print(c, "is even → square:", c * c)
        else:
            print(c, "is odd → cube:", c * c * c)

hehe(numero)


