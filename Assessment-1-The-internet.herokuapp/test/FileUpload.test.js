const File_Upload = require('../pages/FileUpload.page');

// Hitting the-internet-HeroKuapps and Uploading the file... 

describe('FileUploading', () => {
    
    it('open page and FileUpload', () => {

        File_Upload.opening();

    });
    it('selecting any file from Computer', () => {
        
       File_Upload.fileSelecting();
           
    });
    it('click Uploading button', () => {
        
        File_Upload.clickUploading();
    
    });
    it('сhecking that the "File Uploaded" message is displayed', () => {
        
        expect(File_Upload.messages).toHaveTextContaining('File Uploaded!');
    
    });
   
});

