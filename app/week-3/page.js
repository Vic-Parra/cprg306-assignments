// WEEK 3 PAGE
import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="ml-20 my-5">
            <h1 
            className="text-3xl underline pl-7 font-bold"
            >Shopping List</h1>
            <ItemList/> 
        </main>
    );
}