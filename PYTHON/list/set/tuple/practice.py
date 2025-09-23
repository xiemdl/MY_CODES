# collection = single variable that can hold multiple values
# list = [] ordered, mutable, allows duplicate members
# set = {} unordered, unindexed, no duplicate members
# tuple = () ordered, immutable, allows duplicate members(collection)

# sitp_list = ["Conrad", "Jeremia","Belly","Conrad"]
# sitp_set = {"Conrad", "Jeremia","Belly","Conrad"}
# sitp_tuple = ("Conrad", "Jeremia","Belly","Conrad")

# whole_collection = [sitp_list, sitp_set, sitp_tuple]


# for list in whole_collection:
#     print(type(list), len(list), list)


empty_list = []
empty_set = set()
empty_tuple = ()

#append
empty_list.append(1)
print((type(list)),"Append:", empty_list) 

#extend
empty_list.extend([1,2,3,4,5])
empty_list = empty_list + [6,7,8,9]
print((type(list)), "Extend:", empty_list)

#add
empty_set.add(9)
print((type(set), "Add:", empty_set))

#Union
empty_set = empty_set.union({1,2,3,4})
print((type(set)),"Union:", empty_set)

#tuple
empty_tuple = empty_tuple + (1,2,3,4,5)
print(empty_tuple)


my_whole_empty_collection = empty_list,empty_set,empty_tuple

for shie in my_whole_empty_collection:
    print(type(shie), shie)

#remove/delete
empty_list.remove(6)
empty_list.remove(7)
empty_list.remove(8)
empty_list.remove(9)

empty_set.remove(4)
empty_set.remove(9)

empty_tuple = empty_tuple[:2] + empty_tuple[3:]

my_whole_empty_collection = empty_list,empty_set,empty_tuple

for shie in my_whole_empty_collection:
    print(type(shie), shie)


    

