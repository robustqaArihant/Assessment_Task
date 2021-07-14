const Page = require('./pages');

class FileUpload extends Page {
    
    get btnSelectingFile () { return $('#file-upload') }
    get btnUploadingFile () { return $('#file-submit') }
    get messages () { return $('h3=File Uploaded!') }
    
    fileSelecting () {
   
        this.btnSelectingFile.setValue('D:\\dummy.txt');
    }
    clickUploading () {

      this.btnUploadingFile.click();
         
    }
    
    opening () {
        return super.open('upload');
    }
}
module.exports = new FileUpload();