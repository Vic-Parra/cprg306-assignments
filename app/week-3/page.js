// WEEK 3 PAGE
import ItemList from "./item-list";
import Link from "next/link";


export default function Page(){
    return(
        <main className="ml-20 my-5">
            <h1 
            className="text-3xl underline pl-7 font-bold"
            >Shopping List</h1>
            <ItemList/> 

            {/* container for back and next links */}
        <div> 
        <Link href="../" className= "text-rose-200 hover:text-rose-500 p-3">← Back</Link>
        <Link href="./week-4/" className= "text-rose-200 hover:text-rose-500 p-3">Next →</Link>
        <Link href="./page.js/" className= "text-rose-200 hover:text-rose-500 p-3">Home</Link>
        </div>
        </main>
    );
}