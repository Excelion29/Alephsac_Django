from io import StringIO
from urllib import request
import PyPDF2
import os

class PDF_READ_REPOSITORY():

    def PDF_READ_POST(self):
        name_pdf = self.name

        sample_pdf = open(r'C:\xampp\htdocs\AlephGroup\OT 15139SP.pdf', mode='rb')  
        pdfdoc = PyPDF2.PdfFileReader(sample_pdf)

        # file = open(x,"rb")
        # reader = PyPDF2.PdfFileReader(file)

        PDF_READER = {"pdf_name":name_pdf,"pdf_pages":pdfdoc.numPages,"pdf_info":pdfdoc.documentInfo,"pdf_context":pdfdoc.getPage(0).extractText()}


        return PDF_READER