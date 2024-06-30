import '../../../App.css'

interface DeleteButtonProps {
    value: boolean,
    onDelete: () => void,
}

const DeleteButtonComponent = (props: DeleteButtonProps) => {
    return (
        <div className='actions'>
            <input type="checkbox" value={props.value ? 1 : 0}></input>
            <button onClick={(e) => {
                props.onDelete()
            }}>Delete
            </button>
        </div>
    )
}
export default DeleteButtonComponent