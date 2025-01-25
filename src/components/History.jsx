import './History.css';

export default function History ({history}){
    return (
    <div className="history">
        <h2>History</h2>
        {history.length === 0 && <p>None</p>}
        {history && (
            history.map(item => {
                return <p>{item}</p>
            })
            )}
    </div>
        
    )
}