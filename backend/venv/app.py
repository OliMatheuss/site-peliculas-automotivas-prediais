from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # permite comunicação com o React

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "API Flask funcionando corretamente!"})

if __name__ == '__main__':
    app.run(debug=True)
