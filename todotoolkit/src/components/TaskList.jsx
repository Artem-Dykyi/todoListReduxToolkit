export const TaskList = ({tasks}) => {
    return(
        <>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox" defaultChecked={task.done} />
                        <p>{task.valuetx}</p>
                        <button type="button">delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

