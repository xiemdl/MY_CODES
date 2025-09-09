
print("-------------------------------------------------")
print("| --------------CALCULATOR_DOMINGO------------- |")
print("-------------------------------------------------")

while True:
    try:
        num1 = float(input("| Enter the 1st number: "))
        num2 = float(input("| Enter the 2nd number: "))
        break  
    except ValueError:
        print("-------------------------------------------------")
        print("| Invalid input. Please enter valid numbers.    |")
        print("-------------------------------------------------")


operation = input("| Enter an operation (+, -, *, /, %, **): ")
while operation not in ["+", "-", "*", "/", "%", "**"]:
    print("-------------------------------------------------")
    operation = input("| Invalid operation. Please enter one of (+, -, *, /, %, **): ")
    
if operation == "+":
    result = num1 + num2
elif operation == "-":
    result = num1 - num2
elif operation == "*":
    result = num1 * num2
elif operation == "/":
    if num2 == 0:
        result = "Error: Division by zero!"
    else:
        result = num1 / num2
elif operation == "%":
    if num2 == 0:
        result = "Error: Modulus by zero!"
    else:
        result = num1 % num2
elif operation == "**":
    result = num1 ** num2
else:
    result = "Operator is not valid. Please try again."
print("-------------------------------------------------")
print(f"| RESULT: {num1} {operation} {num2} = {result} |")
print("-------------------------------------------------")

print("| Thank you for using the calculator :)         |")
