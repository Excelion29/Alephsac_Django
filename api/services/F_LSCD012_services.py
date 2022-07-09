
import json
import numpy as np
import os

CONV_U = [1000,1000000,10000,10,0.01,10000,10,1000000]

class F_LSCD_012_service():

    def get_lecturas_dosis_VCV(self):

        data=[]

        array_loads=json.loads(self['Lecturas'])

        for item in array_loads:
            # Operaciones para F_LSCD_012
            sum_total = json.loads(item[1])+json.loads(item[2])+json.loads(item[3])+json.loads(item[4])+json.loads(item[5])+json.loads(item[6])+json.loads(item[7])+json.loads(item[8])+json.loads(item[9])+json.loads(item[10])
            array_total_string = [json.loads(item[1]),json.loads(item[2]),json.loads(item[3]),json.loads(item[4]),json.loads(item[5]),json.loads(item[6]),json.loads(item[7]),json.loads(item[8])+json.loads(item[9]),json.loads(item[10])]
            decimales_lect_min = str(min(array_total_string)).split('.')


            if  len(decimales_lect_min) == 2:
                lectura_minima = 1/(10**len(decimales_lect_min[1]))
            else:
                lectura_minima = 1/(10**0)            
            

            # Respuestas para F_LSCD_012
            tasaVCV = json.loads(item[0])
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
            promedio = (sum_total)/10
            d_S = np.std(array_total_string)
            c_v = d_S/(promedio*100)
            
            

            # Operaciones para F_LSCD_012
            switch_unidades = { 
                "µSv":[tasaVCV/promedio, (promedio/tasaVCV-1)*100],
                "mSv":[tasaVCV/(promedio*CONV_U[0]), ((promedio*CONV_U[0])/tasaVCV-1)*100],
                "Sv":[tasaVCV/(promedio*CONV_U[1]), ((promedio*CONV_U[1])/tasaVCV-1)*100],
                "R":[tasaVCV/(promedio*CONV_U[2]), ((promedio*CONV_U[2])/tasaVCV-1)*100],
                "mR":[tasaVCV/(promedio*CONV_U[3]), ((promedio*CONV_U[3])/tasaVCV-1)*100],
                "µR":[tasaVCV/(promedio*CONV_U[4]), ((promedio*CONV_U[4])/tasaVCV-1)*100],
                "rem":[tasaVCV/(promedio*CONV_U[5]), ((promedio*CONV_U[5])/tasaVCV-1)*100],
                "mrem":[tasaVCV/(promedio*CONV_U[6]), ((promedio*CONV_U[6])/tasaVCV-1)*100]
            }

            # Respuestas para F_LSCD_012
            def factor_k_switch(component):
                return switch_unidades.get(component[11],"NA")
            
            data.append(
                {
                    'tasa_dosis':"{:.1f}".format(tasaVCV),
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
                    'lectura_minima':lectura_minima,
                    'unidad':unidad,
                    'promedio':"{:.2f}".format(promedio),
                    'd_s':"{:.2f}".format(d_S),
                    'c_v':"{:.2f}".format(c_v),    
                    'factor_k':"{:.2f}".format(factor_k_switch(item)[0]),
                    'var_resp':"{:.0f}".format(factor_k_switch(item)[1])+"%",
                    'incert':'incert',
                    'test':'test',
                })  
        
        return data