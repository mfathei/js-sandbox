/**
 * standard module pattern
 */
const UICtrl = (function() {
    // private members
    let text = 'Hello World';

    // private function
    function changeElementText(el) {
        document.querySelector(el).textContent = text;
    }
    // public
    return {
        setElementText: function(el) {
            changeElementText(el);
            console.log('Called.');
        }
    };
})();

// test standard module
UICtrl.setElementText('#output');
/**
 * revealing module pattern
 */
const ItemCtrl = (function() {
    // private members
    let data = [];

    // private function
    function add(item) {
        data.push(item);
    }

    // private function
    function get(id) {
        return data.find((item) => {
            return item.id === id;
        });
    }
    // public
    return {
        add: add,
        get: get,
    };
})();

// test revealing module
ItemCtrl.add({id: 1, name: 'mahdy'});
ItemCtrl.add({id: 2, name: 'test'});
console.log(ItemCtrl.get(2));
