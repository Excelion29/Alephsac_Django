import fitz
from django.conf import settings
from api.models import Document

class PDF_READ_REPOSITORY():

    def PDF_READ_POST(self):
        texto=[]
        document = Document(title  = self.name,uploadedFile = self)


        document.save()
        pdf_document = settings.MEDIA_ROOT+'\\'+str(document.uploadedFile) 
        pdf_title = document.title 
        documento = fitz.open(pdf_document)
        pagina = documento.load_page(0)
        for pagina in  documento:
            texto.append(pagina.get_text().encode("utf8"))

        return {"pags":documento.page_count,"Metadada":documento.metadata,"context":texto,"title":pdf_title}
    