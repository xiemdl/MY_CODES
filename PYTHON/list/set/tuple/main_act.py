''' create a grocery list using one of the collection discussed. It must accept input from the user and display. User must be able to add and remove an item from the list'''

print("SHIELA MADEL DOMINGO")
print("LABORATORY ACTIVITY")
    
meat =[]
while True:
    print("----------------- MEAT GROCERY LIST -----------------")
    print("1.ADD ITEMS")
    print("2.DELETE ITEMS")
    print("3.DISPLAY THE ITEMS")
    print("4.EXIT")

    pick_me = input("ENTER YOUR CHOICE: ")

    if pick_me == '1':
        item = input("ENTER THE TYPE OF MEAT: ")
        meat.append(item)
        
    elif pick_me == '2':
        delete = input("ENTER THE ITEM TO DELETE: ")
        if delete in meat:
            meat.remove(delete)
            print(f'ITEM REMOVED: {delete}')
            print(f'CURRENT MEAT LIST: {meat}')
            
    elif pick_me == '3':
         if meat:
            print("----------------- LIST OF MEAT -----------------")
            for c, item in enumerate(meat):
                print(f"{c+1}. {item}")
                
    else:
        if pick_me == '4':
            print("THANK YOU FOR USING THE MEAT GROCERY LIST!")
            break
        else:
            print("MALI SU PIG INPUT MO NA CHOICE (1-4) LNG PO!")
            break
        
        
# EXPLANATION
'''
The program starts with a while True loop so it continues running until the user decides to exit. Inside the loop, the user is given four options. If the user chooses 1, the condition if pick_me == '1' becomes true, and the program uses append() to add the entered meat to the list. If the user chooses 2, the condition elif pick_me == '2' is checked, and the program asks for the name of the item to delete, if that item exists in the list, it is removed using remove(), otherwise a message is shown that the item is not in the list. If the user enters 3, the condition elif pick_me == '3' is executed, and the program checks if the list is not empty,  if there are items, it displays them using enumerate() with numbering, but if the list is empty, it tells the user that the grocery list has no items. If the user chooses 4, the condition elif pick_me == '4' is satisfied, and the program prints a thank you message and exits by breaking the loop. Lastly, if the user enters anything other than 1 to 4, the else part runs and shows an error message saying the input is invalid.
'''