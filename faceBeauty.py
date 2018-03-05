from flask import Flask, render_template, request
from PIL import Image
import string, random, json
app = Flask(__name__)


#your FaceAPI key here
faceAPIKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

#FaceBeautyAi class import here
from classes.FaceBeautyAi import FaceBeautyAi as FBA

#LoveCalculator class import here
from classes.LoveCalculator import LoveCalculator as LC

#my own FaceBeautyAi class object
fba = FBA(faceAPIKey)

#my own LoveCalculator class object
lc = LC()


@app.route('/')
def faceBeauty():
    return render_template('home.html', title = fba.siteTitle(), cssClass = 'purple')


@app.route('/detactFaceBeauty', methods=['GET','POST'])
def detectFaceBeauty():
    if request.method == 'POST':
        optimizeImagePath = "./static/assets/images/converted/"
        img = request.files['ImageFile']
        path = './static/assets/images/'+img.filename
        img.save(path)
        image = Image.open(path)
        size = 512, 512
        image.thumbnail(size, Image.ANTIALIAS)
        newName = "".join(random.choice(string.ascii_uppercase + string.digits) for _ in range(6))
        image.save(optimizeImagePath+newName+'.jpg')
        imgRead = open(optimizeImagePath+newName+'.jpg', 'rb')
        readImg = imgRead.read()
        imgRead.close()
        return fba.findFaceBeauty(readImg)

@app.route('/loveCalc')
def loveCalculator():
    return render_template('loveCalc.html', title = lc.siteTitle(), cssClass = 'pink lighten-3')

@app.route('/findLove', methods=['GET', 'POST'])
def findLove():
    if request.method == 'POST':
        yourName = request.form['yourName']
        partnerName = request.form['yourPartnerName']
        data = {}
        data['love'] = lc.findLove(yourName, partnerName)
        return json.dumps(data)

if __name__ == '__main__':
    app.run(debug=True)
