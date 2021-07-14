module.exports = class Page {
    
    open (paths) {
        return browser.url(`https://the-internet.herokuapp.com/${paths}`);
    }
}
