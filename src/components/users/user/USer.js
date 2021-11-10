export default function USer (props){
    let {items}=props
    return (
        <div>
            {items.id} - {items.name}
        </div>
        );
}