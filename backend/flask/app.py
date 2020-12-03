from flask import Flask, request, jsonify, make_response, render_template
from flask_cors import CORS, cross_origin
from base64 import b64encode
import os , io , sys
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/image/upload', methods=['OPTIONS','POST'])
@cross_origin()
def image_processing():
    image_file = request.files['image']
    
    return jsonify(image=str(b64encode(image_file.read())))
    # return render_template("index.html", user_image = image_file)

if __name__ == '__main__':
    app.run(debug=True)