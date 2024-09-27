

export default function Item({item}){
    return(
        <div className="bg-emerald-950 my-5 rounded-md p-3 w-80">
            <ul class>
                <li className="text-xl">{item.name}</li>
                <li>Buy {item.quantity} in the {item.category} aisle</li>
            </ul>
        </div>
    );
}