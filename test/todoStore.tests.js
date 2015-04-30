describe('TodoStore', function(){
    var store = new TodoStore();

    beforeEach(function(){
        store.clear();
    });

    it('should return empty array', function(){
        expect(store.getAll()).toEqual([]);
    });

});