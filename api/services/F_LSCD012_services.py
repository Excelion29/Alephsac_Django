import json


class F_LSCD_012_service():

    def get_lecturas_dosis_VCV(self):

        data=[]

        array_loads=json.loads(self['Lecturas'])

        for item in array_loads:
            tasaVCV = item[0]
            lectura_1 = item[1]
            lectura_2 = item[2]
            lectura_3 = item[3]
            lectura_4 = item[4]
            lectura_5 = item[5]
            lectura_6 = item[6]
            lectura_7 = item[7]
            lectura_8 = item[8]
            lectura_9 = item[9]
            lectura_10 = item[10]
            unidad = item[11]
            promedio = round((float(item[1])+float(item[2])+float(item[3])+float(item[4])+float(item[5])+float(item[6])+float(item[7])+float(item[8])+float(item[9])+float(item[10]))/10, 2)
            data.append(
                {
                    'tasa_dosis':tasaVCV,
                    'lectura_1':lectura_1,
                    'lectura_2':lectura_2,
                    'lectura_3':lectura_3,
                    'lectura_4':lectura_4,
                    'lectura_5':lectura_5,
                    'lectura_6':lectura_6,
                    'lectura_7':lectura_7,
                    'lectura_8':lectura_8,
                    'lectura_9':lectura_9,
                    'lectura_10':lectura_10,
                    'lectura_minima':'lectura_minima',
                    'unidad':unidad,
                    'promedio':promedio,
                    'd_s':'d_s',
                    'c_v':'c_v',    
                    'factor_k':'factor_k',
                    'var_resp':'var_resp',
                    'incert':'incert',
                    'test':'test',
                })  
        
        return data