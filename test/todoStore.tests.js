describe('TodoStore', function(){
    var store = new TodoStore();

    beforeEach(function(){
        store.clear();
    });

    it('should return empty array', function(){
        expect(store.getAll()).toEqual([]);
    });

    it('should add new todo', function(){
        var todo = {}
        todo.completed = false;
        todo.title = 'new';
        store.add(todo)
        expect(store.getAll().length).toBe(1);
    });

    it('should remove todo from store', function(){
        var todo = {};
        todo.completed = false;
        todo.title = 'new';
        //todo.id = store.add(todo);
        store.add(todo);
        store.remove(todo);
        expect(store.getAll().length).toBe(0);
    })

    it('should mark todo as completed', function(){
        var todo = {};
        todo.completed = false;
        todo.title = 'new';
        store.add(todo);
        store.changeState(todo, true);
        var all = store.getAll()
        var todoItem = _.find(all, function(item){return item.id === todo.id});
        expect(todoItem.completed).toBe(true)
    })

    it('should throw exception when try add new todo', function(){
        var todo = {};
        todo.completed = false;
        //todo.title = 'new';
        //store.add(todo);
        expect(function(){store.add(todo)}).toThrow(new Error("Fill the title!"));
    })

    it('should change state', function(){
        var todo = {};
        todo.completed = false;
        todo.title = "TITLE";
        store.add(todo);
        store.changeState(todo, true);
        var all = store.getAll()
        var todoItem = _.find(all, function(item){return item.id === todo.id});
        expect(todoItem.completed).not.toBe(false);
    })
});