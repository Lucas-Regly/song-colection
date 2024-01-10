import { useState } from 'react'

const ListForm = ({ addList }) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addList(value, category);
        setValue('');
        setCategory('');
    }

    return (
        <div className='list-form'>
            <h2>Create list:</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setValue(e.target.value)} type="text" value={value} placeholder="Type a song" />
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">Select a category</option>
                    <option value="Rock">Rock</option>
                    <option value="Funk">Funk</option>
                    <option value="Pop">Pop</option>
                    <option value="Eletronic">Eletronic</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Dubstep">Dubstep</option>
                    <option value="Blues">Blues</option>
                    <option value="Country Music">Country Music</option>
                    <option value="Hip-Hop">Hip-Hop</option>
                </select>
                <button type='submit'>Add Song</button>
            </form>
        </div>
    )
}

export default ListForm