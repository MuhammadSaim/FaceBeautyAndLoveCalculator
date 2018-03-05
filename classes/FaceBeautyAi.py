import json
import urllib.parse as urlparse
import http.client as http
class FaceBeautyAi:
    subscriptionKey = ""
    face_api_url = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect'
    params = ""
    headers = ""
    # imageUrl = "http://www.viralclass.com/wp-content/uploads/2016/10/Kriti-Sanon-Images-13.jpg"

    def __init__(self, subscriptionKey):
        self.subscriptionKey = subscriptionKey
        self.params = urlparse.urlencode( {
            'returnFaceId': 'true',
            'returnFaceLandmarks': 'false',
            'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise',
        })
        self.headers = {
            'Ocp-Apim-Subscription-Key': self.subscriptionKey,
            'Content-type': 'application/octet-stream'

        }

    def siteTitle(self):
        return "ISP - FaceBeautyAI"


    def findFaceBeauty(self, image):
        conn = http.HTTPSConnection("westcentralus.api.cognitive.microsoft.com")
        conn.request("POST", "/face/v1.0/detect?%s" % self.params, image, self.headers)
        response = conn.getresponse()
        data  = response.read()
        conn.close()
        # response = requests.post(self.face_api_url, params=params, headers=headers, body=ImageUrl)
        # faces = response.json()
        return data


