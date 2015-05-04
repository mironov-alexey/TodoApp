/**
 * Компонент рисует список задач
 * @constructor
 */
function TodoList(todoStore) {
    this.todoStore = todoStore;
    this.todos = [];
    this.newTodoTitle = "";
    this.$updateList = this.$all;
    this.$updateList();
}

TodoList.prototype.$changeFilter = function(filter){
    if (filter === "all")
        this.$updateList = this.$all;
    else if(filter === "todo")
        this.$updateList = this.$todo;
    else
        this.$updateList = this.$done;
    this.$updateList();
}

TodoList.prototype.$updateList = function () {
    this.todos = this.todoStore.getAll();
};

TodoList.prototype.$all = function(){
    this.todos = this.todoStore.getAll();
}

TodoList.prototype.$todo = function () {
    var all = this.todoStore.getAll();
    this.todos = [];
    for(var i in all){
        if(!i.completed)
            this.todos.push(i);
    }
};
TodoList.prototype.$done = function(){
    var all = this.todoStore.getAll();
    this.todos = [];
    for (var i in all){
        if (i.completed) {
            this.todos.push(i);
        }
    }
}

TodoList.prototype.create = function(){
    if (!this.newTodoTitle)
        return;
    this.todoStore.add({title: this.newTodoTitle});
    this.$updateList();
    this.newTodoTitle = "";
}

TodoList.prototype.checkboxChanged = function(todo){
    this.todoStore.changeState(todo, todo.completed)
}

TodoList.prototype.removeTodo = function (todo) {
    this.todoStore.remove(todo);
    this.$updateList();
}
