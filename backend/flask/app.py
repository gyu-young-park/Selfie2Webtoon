from flask import Flask, request, jsonify, make_response, render_template
from flask_cors import CORS, cross_origin
from base64 import b64encode
from ugatit import tensor2img,RGB2BGR,save_img
import os , io , sys
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# model_webtoonify_freedraw = ugotit.load_model("freedraw_female_params_2000000.pt")

# ugotit_transform = transforms.Compose([
#             transforms.Resize((128, 128)),
#             transforms.ToTensor(),
#             transforms.Normalize(mean=(0.5, 0.5, 0.5), std=(0.5, 0.5, 0.5))
#         ])

# tensor2PIL = transforms.ToPILImage('RGB')

@app.route('/image/upload', methods=['OPTIONS','POST'])
@cross_origin()
def image_processing():
    image_file = request.files['image']
    # GPU가 없으면 모델을 돌릴 수가 없어 보류 중...
    # images = Image.open(BytesIO(base64.b64decode(image_data)))
    # images_cropped = images
    # images_transformed = ugotit_transform(images_cropped)
    # # Ugotit에 넣기 위해 이미지를 Transform
    # # images_webtoon = None
    # images_transformed = images_transformed.unsqueeze(0).to("cuda")
       
    # images_webtoon = model_webtoonify_freedraw(images_transformed)


    # # convert 
    # images_webtoon = tensor2img(images_webtoon)
    # images_webtoon = RGB2BGR(images_webtoon)
    return jsonify(image=str(b64encode(image_file.read())))

if __name__ == '__main__':
    app.run(debug=True)