def calculate_ave(grades):
    if not grades:
        return 0
    return sum(grades) / len(grades)

def letter_ave(average):
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

def status(letter):
    if letter == 'A':
        return "EXCELLENT"
    elif letter == 'B':
        return "GOOD"
    elif letter == 'C':
        return "AVERAGE"
    elif letter == 'D':
        return "BELOW AVERAGE  "
    else:
        return "FAIL"

def print_result(name, grades, average, letter, stat):
    print(f"\n--- STUDENT GRADE REPORT---")
    print(f"NAME: {name.title()}")
    print(f"GRADES: {grades}")
    print(f"AVERAGE: {average:.2f}")
    print(f"LETTER GRADE: {letter}")
    print(f"STATUS: {stats}")


name = input("ENTER STUDENT NAME: ")
grades_input = input("ENTER GRADES & SEPARATED WITH (,): ")
grades = [int(g.strip()) for g in grades_input.split(",") if g.strip().isdigit()]

average = calculate_ave(grades)
letter = letter_ave(average)
stats = status(letter)

print_result(name, grades, average, letter, stats)
