const Filter = ({setSort}) => {
    return (
        <div className="filter">
            <div>
                 <p>Alphabetical order:</p>
                <button onClick={() => setSort('Asc')}>Asc</button>
                <button onClick={() => setSort('Desc')}>Desc</button>
            </div>
        </div>
    )
}

export default Filter