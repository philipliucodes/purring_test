from flask import Flask
from answer_generator import *
from text_gen import *
from image_gen import *



def generate_game():
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
        medium = random.choice(['text', 'image'])
        if medium == 'text':
            prompt, clue = gen_text_clue(answer) 
            game[i]['prompt'] = prompt.format(f"this {category}")
            game[i]['clue'] = clue
        elif medium == 'image':
            prompt, clue = gen_image_clue(answer)
            game[i]['prompt'] = prompt.format(f"this {category}")
            game[i]['clue'] = clue
        
    return game

app = Flask(__name__)

@app.route('/api/new_game', methods=['GET'])
def new_game():
    return generate_game()

if __name__ == '__main__':
    app.run(debug=True)