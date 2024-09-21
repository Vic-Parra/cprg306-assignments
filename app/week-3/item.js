

export default function Item({item}){
    return(
        <div>
            <ul>
                <li>{item.name}</li>
                <li>{item.quantity}</li>
                <li>{item.category}</li>
            </ul>
        </div>
    );
}