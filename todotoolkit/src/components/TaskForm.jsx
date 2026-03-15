export const TaskForm = ({onHandleSub, valuetx, onChange}) => {
    
    return( 
        <>
            <h1>Додайте завдання</h1>
             <form action="" onSubmit={onHandleSub}>
                <input 
                    type="text" 
                    value={valuetx}
                    onChange={onChange}
                    />
                <button type="submit" >add</button>
             </form>
        </>
    )
}