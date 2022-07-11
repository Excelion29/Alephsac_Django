from api.Repository.PDF_read_Repository import PDF_READ_REPOSITORY


class PDF_READ_SERVICES():
    
    def PDF_READ_POST(self):
        repository = PDF_READ_REPOSITORY.PDF_READ_POST(self)
        return repository