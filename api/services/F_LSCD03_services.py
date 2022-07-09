

from api.models import F_LSCD03
import math
import numpy as np

ATENUAD = ["SA","V","III","III+V","II+V","II+III","IV","IV+V","III+IV","I+IV","II+IV+V","II+III+IV+V","I+II+III+IV+V"]
DISTANCIA = [0.0374544366961017,0.0139340011717121,0.00596478244898521,0.0022995558436898,0.000928735344622004,0.000400689187922865,0.000245503830168261,0.0000966764175111964,0.0000420792970707922,0.0000187569283718711]

class F_LSCD_03(F_LSCD03):

    def get_tasa_dosis_VCV(self):
        
        # value = list(map(lambda x:x, self['tasaVCV']))
        data = []
        for item in self['tasaVCV']:
            if (float(item)>=4.16E-03 and float(item)<=3.75E-02):
                atn = ATENUAD[0]
                dist = "{0:.3f}".format(math.sqrt(DISTANCIA[0]/float(item)))
            elif (float(item)>=2.13E-03 and float(item)<=6.19E-03):
                atn = ATENUAD[1]
                dist = "{0:.3f}".format(math.sqrt(DISTANCIA[1]/float(item))) 
            elif (float(item)>=9.54E-04 and float(item)<=2.65E-03):
                atn = ATENUAD[2]
                dist = "{0:.3f}".format(math.sqrt(DISTANCIA[2]/float(item))) 
            elif (float(item)>=3.68E-04 and float(item)<=1.02E-03):
                atn = ATENUAD[3]
                dist = "{0:.3f}".format(math.sqrt(DISTANCIA[3]/float(item))) 
            elif (float(item)>=1.49E-04 and float(item)<=4.13E-04):
                atn = ATENUAD[4]
                dist = "{0:.3f}".format(math.sqrt(DISTANCIA[4]/float(item))) 
            elif (float(item)>=6.41E-05 and float(item)<=1.78E-04):
                atn = ATENUAD[5]
                dist = "{0:.3f}".format(math.sqrt(DISTANCIA[5]/float(item))) 
            elif (float(item)>=3.93E-05 and float(item)<=1.09E-04):
                atn = ATENUAD[6]
                dist = "{0:.3f}".format(math.sqrt(DISTANCIA[6]/float(item))) 
            elif (float(item)>=1.55E-05 and float(item)<=4.30E-05):
                atn = ATENUAD[7]
                dist = "{0:.3f}".format(math.sqrt(DISTANCIA[7]/float(item))) 
            elif (float(item)>=6.73E-06 and float(item)<=1.87E-05):
                atn = ATENUAD[8]
                dist = "{0:.3f}".format(math.sqrt(DISTANCIA[8]/float(item))) 
            elif (float(item)>=3.00E-06 and float(item)<=8.34E-06):
                atn = ATENUAD[9]
                dist = "{0:.3f}".format(math.sqrt(DISTANCIA[9]/float(item))) 

            
            data.append({'tasa_dosis':("{:.1f}".format(float(item)*1000000)),'unidad':'Sv/h','atenuador':atn,'distancia':dist})  

        return data
