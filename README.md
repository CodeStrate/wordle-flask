# Wordle App

Welcome to the Wordle App, a Python Flask-based implementation of the popular word-guessing game. This application replicates the classic Wordle experience with additional features planned for the future.

## Features

- **Classic Wordle Gameplay**: Guess the correct 5-letter word within six attempts.
- **Color-Coded Feedback**: 
  - **Green**: Correct letter in the correct position.
  - **Yellow**: Correct letter in the wrong position.
  - **Gray**: Incorrect letter.
- **Flip Animation**: A smooth flip animation is applied to the tiles as they reveal whether the letter is correct, present, or absent.
- **Responsive Design**: The app is designed to be fully responsive and playable on both desktop and mobile devices.

## Technologies Used

- **Python**: Backend logic.
- **Flask**: Web framework for Python, serving the application.
- **HTML/CSS**: Frontend design and styling.
- **JavaScript**: Frontend logic and animation handling.

## Installation and Setup

### Prerequisites

- Python 3.x
- Flask
- Provided `requirements.txt`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CodeStrate/wordle-app.git
   cd wordle-app
   ```

2. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask app:
   ```bash
   flask run
   ```

5. Open your web browser and go to `http://127.0.0.1:5000` to start playing Wordle!

## How to Play

1. Enter a 5-letter word using your keyboard.
2. Press "Enter" to submit your guess.
3. The tiles will flip, revealing whether each letter is correct, present in the word but in the wrong position, or absent.
4. Keep guessing until you either find the correct word or run out of attempts.

## Future Scope

The following features are planned for future releases:

- **Themes**: Customize the game's appearance with different themes.
- **Versus Mode**: Play against friends in a head-to-head word-guessing battle.
- **Bot Battle**: Challenge a bot powered by advanced language models like Gemini.
- **Leaderboard**: Track your progress and compare scores with others.

## Contributing

Contributions are welcome! If you have any ideas for new features, feel free to fork the repository and submit a pull request.