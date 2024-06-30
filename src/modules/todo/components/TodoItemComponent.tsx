import '../../../App.css'
import DeleteButtonComponent from "./DeleteButtonComponent";
import {TodoItemModel} from "../models/TodoItemModel";

interface TodoItemProps {
    dataModel: TodoItemModel,
    onDelete: () => void,
    onMark: () => void
}

const TodoItemComponent = (props: TodoItemProps) => {
    return (
        <>
            <div className="todo-item">
                <p>{props.dataModel.taskDesc}</p>
                <DeleteButtonComponent value={props.dataModel.isFullFilled ?? false}
                                       onDelete={props.onDelete}></DeleteButtonComponent>
            </div>
        </>
    )
}
export default TodoItemComponent