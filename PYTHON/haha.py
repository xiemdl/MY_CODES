# Student Grade Management System

# Create a simple grade management system for a teacher. The system should be able to calculate grades. At least 3 functions.

# Example function.
# FUNCTION 1: Calculate average
# FUNCTION 2: Letter grade
# FUNCTION 3: Grade status

def calculate_average(grades):
    if not grades:
        return 0
    return sum(grades) / len(grades)

def get_letter_grade(average):
    if average >= 90:
        return 'A'
    elif average >= 80:
        return 'B'
    elif average >= 70:
        return 'C'
    elif average >= 60:
        return 'D'
    else:
        return 'F'

def grade_status(letter_grade):
    letter_grade = letter_grade.upper()  # Ensure it’s uppercase
    if letter_grade in ['A', 'B', 'C']:
        return "Pass"
    elif letter_grade == 'D':
        return "Conditional Pass"
    else:
        return "Fail"

def display_result(name, grades, average, letter, status):
    name = name.title()  # Capitalize name
    grades_str = ", ".join([str(grade) for grade in grades])  # Join grades into string
    return (
        f"\n--- Student Report ---\n"
        f"Student Name: {name}\n"
        f"Grades: {grades_str}\n"
        f"Average: {average:.2f}\n"
        f"Letter Grade: {letter}\n"
        f"Status: {status}\n"
    )

# --- Main Program ---
name_input = input("Enter student name: ")

grades_input = input("Enter grades separated by commas (e.g., 85,90,78): ")
grades_list = [int(g.strip()) for g in grades_input.split(",") if g.strip().isdigit()]

average = calculate_average(grades_list)
letter = get_letter_grade(average)
status = grade_status(letter)

result = display_result(name_input, grades_list, average, letter, status)

print(result)
