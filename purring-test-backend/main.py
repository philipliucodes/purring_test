from flask import Flask



app = Flask(__name__)

@app.route('/what_you_asked', methods=['GET'])
def api():
    return {'its':'done'}

@app.route('/api/new_game', methods=['GET'])
def new_game():
    return {
        'round_1' : {

        }
    }

if __name__ == '__main__':
    app.run(debug=True)