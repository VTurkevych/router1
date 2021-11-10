export default function Post (props){
    let {item} = props
    return (
        <div>
            {item.id} - {item.title}
        </div>
        );
}