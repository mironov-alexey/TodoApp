/**
 * Компонент рисует список задач
 * @constructor
 */
function TodoList(todoStore) {
    this.todoStore = todoStore;
    this.todos = [];
    this.$updateList();
}

TodoList.prototype.$updateList = function () {
    this.todos = this.todoStore.getAll();
};