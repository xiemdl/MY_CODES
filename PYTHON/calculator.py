# Display program header
print("-------------------------------------------------")
print("| --------------CALCULATOR_DOMINGO------------- |")
print("-------------------------------------------------")

# Ask user for the first number
num1 = input("| Enter 1st number: ")
print("-------------------------------------------------")

# Ask user for the second number
num2 = input("| Enter 2nd number: ")
print("-------------------------------------------------")

# Ask user for the operation
operation = input("| Enter an operation (+, -, *, /, //, %, **): ")

# Perform calculation based on operator
if operation == "+":
    result = int(num1) + int(num2)   # Addition
elif operation == "-":
    result = int(num1) - int(num2)   # Subtraction
elif operation == "*":
    result = int(num1) * int(num2)   # Multiplication
elif operation == "/":
    result = int(num1) / int(num2)   # Division
elif operation == "//":
    result = int(num1) // int(num2)  # Floor Division
elif operation == "%":
    result = int(num1) % int(num2)   # Modulus
elif operation == "**":
    result = int(num1) ** int(num2)  # Exponentiation / Power
else:
    result = "Operator is not recognized"

# Display the result
print("-------------------------------------------------")
print(f"| RESULT: {num1} {operation} {num2} = {result} |")
print("-------------------------------------------------")
