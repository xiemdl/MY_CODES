import re

pet = "siamese"
name = "Kiwi"
age = 2
gender = "female"
weight = 3.5

#sample1
madeup_string =f"my pet is a {pet}, her name is {name}, she is {age} years"
print(madeup_string)

#sample2 - using str.format()
madeup_string1 = "My pet {} is a {} and she is {}".format(name,pet,weight)
print(madeup_string1)

#sample3 - using % operator
madeup_string2 = "My pet %s she is %s and her weight is %d" % (pet,name,weight)
print(madeup_string2)

#formatting numbers
pi = 3.1415926535

#sample1
madeup_number =f"Pi is rounded to 2 decimal places is {pi:6f}"
print(madeup_number)

#formatting with width and alignment
madeup_string3 = f"|{'Name': <2}: {name:>10}| {'Age':^5}: {age:^10}|"
print(madeup_string3)

#foematting with thousands seperator
number = 123456789
madeup_string4 = f"The number is {number:,}"
print(madeup_string4)

#formatting with percentage
percent = 0.185
madeup_string5 =f"The sucess rate is {percent:.2%}"
print(madeup_string5)

#formatting with scientific notation
big_num =12345678910
madeup_string6 = f"The big number in scientific notation is {big_num:2e}"
print(madeup_string6)

#formatting using format specific in str.format()
madeup_string7 = "My pet's name is {0:<10} and she is {1:^10} and she is given by my hehe".format(name,pet)
print(madeup_string7)


