import json

meat_shop = {
    "meat" : []
}

while True:
    print("----------------- MEAT GROCERY LIST -----------------")
    print("1.ADD ITEMS")
    print("2.DELETE ITEMS")
    print("3.DISPLAY THE ITEMS")
    print("4.EXIT")

    pick_me = input("ENTER YOUR CHOICE: ")
    
    if pick_me == '1':
        item = input("ENTER THE TYPE OF MEAT: ")
        meat_shop["meat"].append(item)
        
    elif pick_me == '2':
        delete = input("ENTER THE ITEM TO DELETE: ")
        if delete in meat:
            meat.remove(delete)
            print(f'ITEM REMOVED: {delete}')
            print(f'CURRENT MEAT LIST: {meat}')
            
    elif pick_me == '3':
        #  if meat:
        #     print("----------------- LIST OF MEAT -----------------")
            # for c, item in enumerate(meat):
            #     print(f"{c+1}. {item}")
        
            
        with open("./meatf/my_meat.json","r") as f:
            data = json.load(f)
        print("Reading:", data)
            
                
    else:
        if pick_me == '4':
            print("THANK YOU FOR USING THE MEAT GROCERY LIST!")
            
            convert_to_json = json.dumps(meat_shop)
            print(convert_to_json)
            
            c = json.loads(convert_to_json)
            print(c)
            
            with open("./meatf/my_meat.json", "w") as f:
                json.dump(c,f)
                
            break
        else:
            print("MALI SU PIG INPUT MO NA CHOICE (1-4) LNG PO!")
            break
        
        
        
    
