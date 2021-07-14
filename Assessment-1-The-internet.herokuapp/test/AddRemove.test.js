const AddRemove_Page = require('../pages/AddRemove.page');

// Hitting the-internet-HeroKuapps and Add/Remove Elements...

describe('Add/Remove Ui Elements', () => {
    
    it('open page Add/Remove Ui elements', () => {
       
        AddRemove_Page.opening();

    });
    it('click on “Add Element” Four times', () => {
        
        AddRemove_Page.TapAdding();
        AddRemove_Page.TapAdding();
        AddRemove_Page.TapAdding();
        AddRemove_Page.TapAdding();  
    });
    it('checking That Four Delete Items Appeared', () => {
        
        expect(AddRemove_Page.elementsValue).toHaveChildren(4);
    
    });
    it('сlick on the Delete button in site', () => {
        
        AddRemove_Page.TapDeleting();
        
    });
    it('сhecking that there are only three Delete items left', () => {
        
        expect(AddRemove_Page.elementsValue).toHaveChildren(3);
        
    });
   
});


