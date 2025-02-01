from flask import Flask
from answer_generator import *



app = Flask(__name__)

@app.route('/what_you_asked', methods=['GET'])
def api():
    return {'its':'done'}

@app.route('/api/new_game', methods=['GET'])
def new_game():
    game = {}
    num_games = 3
    for i in range(num_games):
        category, answer = generate_answer()
        game[i] = {
            'id': i,
            'category': category,
            'answer': answer,
            'prompt': "",
            'clue': ""
        }
    return game

if __name__ == '__main__':
    app.run(debug=True)