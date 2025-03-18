from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

damps = [
    { 'description': 'damping_factor', 'amount':  0.0001}
]

@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/api/model_info')
def model():
    return jsonify(damps)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
