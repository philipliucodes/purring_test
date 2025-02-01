from flask import Flask
from flask_cors import CORS

from answer_generator import *
from text_gen import *
from image_gen import *




def generate_game():
    game = []
    num_games = 3
    for i in range(num_games):
        category, answer = generate_answer()
        print(category, answer)
        game.append({
            'id': i,
            'category': category,
            'answer': answer,
            'prompt': "",
            'clue': "",
            'clue_type': ""
        })
        medium = random.choice(['text', 'image'])
        medium = "text"
        if medium == 'text':
            prompt, clue = gen_text_clue(answer) 
            print(prompt)
            game[-1]['prompt'] = prompt.format(f"this {category}")
            game[-1]['clue'] = clue
            game[-1]['clue_type'] = "text"
        elif medium == 'image':
            prompt, clue = gen_image_clue(answer)
            game[-1]['prompt'] = prompt.format(f"this {category}")
            game[-1]['clue'] = clue
            game[-1]['clue_type'] = "image"
        print(game[-1]['prompt'])
    return game

app = Flask(__name__)
CORS(app)

@app.route('/api/new_game', methods=['GET'])
def new_game():
    return generate_game()



if __name__ == '__main__':
    app.run(debug=True)