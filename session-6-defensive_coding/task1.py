# Task 1: Refactoring
# Objective: Refactor the provided code snippet to improve readability and maintainability.

# Instructions:
# Identify areas of the code that can be improved.
# Apply refactoring techniques such as renaming variables, extracting functions, simplifying conditional expressions, and removing code duplication.
# Ensure the refactored code produces the same output as the original code.


# Original Code Snippet:
def process_transactions(transactions):
    for t in transactions:
            if t['type'] == 'credit':
                if t['amount'] > 0:
                    print(f"Credit transaction of ${t['amount']}")
                else:
                    print("Invalid credit amount")
            elif t['type'] == 'debit':
                if t['amount'] > 0:
                    print(f"Debit transaction of ${t['amount']}")
                else:
                    print("Invalid debit amount")
            else:
                print("Unknown transaction type")

transactions = [
        {'type': 'credit', 'amount': 100},
        {'type': 'debit', 'amount': 50},
        {'type': 'credit', 'amount': -20},
        {'type': 'transfer', 'amount': 30}
    ]

process_transactions(transactions)



