from flask import Flask, request
from flask_cors import CORS

cors = CORS()

def create_app():
    app = Flask(__name__)
    # TODO hook up to db
    # TODO get temp credentials

    cors.init_app(app)

    return app

app = create_app()

# TODO move this into its own file
@app.route('/')
def basic_get():
    return "GET From Flask!"

@app.route('/data')
def basic_data_get():
    return "GET DATA!"

@app.route('/search', methods=["POST"], strict_slashes=False)
def game_search_result():
    if request.method == 'POST':
        print("POST ALL DAY")
        return "POSTED METHOD"
    search_data = request.json
    if search_data:
        print("Data sent from react")
        return "data from react"
    print("Not Working")
    return "No data from react"
    

if __name__ == '__main__':
    app.run(debug=True)