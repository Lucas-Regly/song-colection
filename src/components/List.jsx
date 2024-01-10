import React from 'react'

const List = ({ todo, remove }) => {
    return (
        <div>
            <div className='list'>
                <div className="content">
                    <p>{todo.text}</p>
                    <p className='category'>({todo.category})</p>
                </div>
                <div>
                    <button onClick={() => remove(todo.id)} className='remove'>x</button>
                </div>
            </div>
        </div>
    )
}

export default List;