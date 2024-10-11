import NewItem from "./new-item";
import Link from "next/link";


export default function Page(){

    return(
        <main>
            <NewItem />

            {/* container for back and next links */}
            <div> 
            <Link href="../" className= "text-rose-200 hover:text-rose-500 p-3">← Back</Link>
            <Link href="./week-6/" className= "text-rose-200 hover:text-rose-500 p-3">Next →</Link>
            <Link href="./page.js/" className= "text-rose-200 hover:text-rose-500 p-3">Home</Link>
            </div>
        </main>
    );
}