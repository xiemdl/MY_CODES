print("-------------------------------------------------")
print("| --------------CALCULATOR_DOMINGO------------- |")
print("-------------------------------------------------")

for c in range(5):
    while True:
        try:
            num1 = float(input("| Enter 1st number: "))
            print("-------------------------------------------------")
            num2 = float(input("| Enter 2nd number: "))
            print("-------------------------------------------------")
            operation = input("| Enter an operation (+, -, *, /, //, %, **): ")
            print("-------------------------------------------------")
            break
        except ValueError:
            print("| Invalid input. Please enter numbers only.")
            print("-------------------------------------------------")

    if operation == "+":
        result = num1 + num2
    elif operation == "-":
        result = num1 - num2
    elif operation == "*":
        result = num1 * num2
    elif operation == "/":
        try:
            result = num1 / num2
        except ZeroDivisionError:
            result = "Cannot divide by zero."
    elif operation == "//":
        try:
            result = num1 // num2
        except ZeroDivisionError:
            result = "Cannot divide by zero."
    elif operation == "%":
        try:
            result = num1 % num2
        except ZeroDivisionError:
            result = "Cannot divide by zero."
    elif operation == "**":
        result = num1 ** num2
    else:
        result = "Operator is not recognized"

    print("-------------------------------------------------")
    print(f"| RESULT : {c+1}: {num1} {operation} {num2} = {result}")
    print("-------------------------------------------------")
