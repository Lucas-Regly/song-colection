import { useState } from 'react'
import List from './components/list'
import ListForm from './components/ListForm'
import Search from './components/Search'
import Filter from './components/Filter'
import('./App.css')

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('');


  const [sort, setSort] = useState('Asc')
  const addList = (text, category) => {
    const newList = [...todos,
    {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isComplete: false
    }]

    setTodos(newList)
  }

  const removeList = (id) => {
    const newList = [...todos]
    const filteredTodos = newList.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  return (
    <div className='app'>
      <h1>Song List</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className='songs-list'>
        {todos
         .filter((todo) => 
          todo.text.toLowerCase().includes(search.toLowerCase())
         )
         .sort((a, b) =>
         sort === 'Asc'
         ? a.text.localeCompare(b.text)
         : b.text.localeCompare(a.text)
         )
          .map((song) => (
            <List
              key={song.id}
              todo={song}
              remove={removeList} />
          ))}
      </div>
      <ListForm addList={addList} />
    </div>
  )
}

export default App
