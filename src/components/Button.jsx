export default function Button ({content, cssId, handler}){
    return (
        <button id={cssId} onClick={handler}>{content}</button>
    )
}