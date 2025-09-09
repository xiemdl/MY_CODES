def print_board(board):
    print(f"{board[0]} {board[1]} {board[2]}")
    print(f"{board[3]} {board[4]} {board[5]}")
    print(f"{board[6]} {board[7]} {board[8]}")

def check_win(board, player):
    win_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], # rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], # columns
        [0, 4, 8], [2, 4, 6]             # diagonals
    ]
    return any(all(board[i] == player for i in combo) for combo in win_combinations)

def is_draw(board):
    return all(cell in ['X', 'O'] for cell in board)

def play_game(starting_player='X'):
    board = ['-' for _ in range(9)]
    current_player = starting_player
    winner = None

    print(f"\nPLAYER ({'O' if starting_player == 'X' else 'X'}) WINNING ROUND:")
    print_board(board)

    while not winner and not is_draw(board):
        try:
            move = int(input(f"Player {current_player}, enter your move (1-9): "))
            if move < 1 or move > 9 or board[move - 1] != '-':
                print("Invalid move! Try again.")
                continue
        except ValueError:
            print("Invalid input! Enter a number between 1 and 9.")
            continue

        board[move - 1] = current_player
        print_board(board)

        if check_win(board, current_player):
            print(f"Player {current_player} wins!\n")
            winner = current_player
            break

        current_player = 'O' if current_player == 'X' else 'X'

    if not winner:
        print("It's a draw!\n")
        print("THANK YOU FOR PLAYING TIC TAC TOE!")

# 🔁 Play 2 Rounds (like your example)
play_game('O')  # First round: O starts
play_game('X')  # Second round: X starts

