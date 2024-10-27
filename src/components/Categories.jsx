export default function Categories({ setFilter }) {
    return (
        <>
            <div className="categoryBtn">
                <button onClick={() => setFilter(0)}>All</button>
                <button onClick={() => setFilter(1)}>Completed</button>
                <button onClick={() => setFilter(2)}>Pending</button>
            </div>
        </>
    )
}