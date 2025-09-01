print("-------------------------------------------------")
print("| --------------CALCULATOR_DOMINGO------------- |")
print("-------------------------------------------------")
num1 = input("| Enter 1st number: ")
print("-------------------------------------------------")
num2 = input("| Enter 2nd number: ")
print("-------------------------------------------------")
operation = input("| Enter an operation (+, -, *, /,//, %, **): ")

if operation == "+":
    result = int(num1) + int(num2)
elif operation == "-":
     result = int(num1) - int(num2)
elif operation == "*":
     result = int(num1) * int(num2)
elif operation == "/":
     result = int(num1) / int(num2)
elif operation == "//":
     result = int(num1) // int(num2)
elif operation == "%":
     result = int(num1) % int(num2)
elif operation == "**":
     result = int(num1) ** int(num2)
else:
     result = "Operator is not recognized"
     
print("-------------------------------------------------")
print("|RESULT:", num1 , operation, num2, "=" , result,"                        |")
print("-------------------------------------------------")

