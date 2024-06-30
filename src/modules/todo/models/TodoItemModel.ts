export class TodoItemModel {
    taskId: number;
    taskDesc: string;
    isFullFilled?: boolean = false;

    constructor(name: string, id: number) {
        this.taskDesc = name;
        this.taskId = id;
    }
}
