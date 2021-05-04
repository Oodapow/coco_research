from flask import Flask
from flask import jsonify
from flask import request
from flask import make_response
from flask import Blueprint
from flask import send_file
UPLOAD_FOLDER = '/images/'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'jfif'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
#                  {[{src: "0.0.0.0:5000/get_image", name: "Image 1"}]}
@app.route('/get_image')
def get_image():
    if request.args.get('type') == '1':
       filename = 'ok.gif'
    else:
       filename = 'error.gif'
    return send_file(filename, mimetype='image/gif')

if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)
