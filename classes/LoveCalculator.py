class LoveCalculator:
    def __init__(self):
        pass


    def siteTitle(self):
        return "ISP - LoveCalculator"


    def findLove(self, yourName, partnerName):
        yourName = len(yourName)
        partnerName = len(partnerName)
        totalLength = yourName + partnerName
        if yourName > partnerName:
            totalLength = totalLength - 5
        else:
            totalLength = totalLength + 3

        totalLength = totalLength * 42
        totalLength = totalLength / (100 + partnerName)
        if totalLength > 10:
            totalLength = 9

        if totalLength < 3:
            totalLength = 3
        totalLength = int(round(totalLength, 0))
        return totalLength
