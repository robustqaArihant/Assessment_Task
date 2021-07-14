const Page = require('./pages');

class AddRemovePage extends Page {
    
    get btnAdding () { return $('button') }
    get btnDeleting () { return $('.added-manually') }
    get elementsValue () { return $('#elements') }
    
    TapAdding () {
   
        this.btnAdding.click(); 
    }
    TapDeleting () {

        this.btnDeleting.click(); 
    }
    
    opening () {
        return super.open('add_remove_elements/');
    }
}

module.exports = new AddRemovePage();