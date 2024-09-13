from flask import Flask, jsonify
from flask_cors import CORS
import redis

app = Flask(__name__)
CORS(app)
r = redis.Redis(host='redis-server', port=6379, decode_responses=True)

@app.route('/')
def hello():
    count = r.incr('hits')
    return jsonify(message="Hello from Flask!", hits=count)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)