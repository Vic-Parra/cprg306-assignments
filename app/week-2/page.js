// SECOND PAGE

// imports
import Link from "next/link";
import StudentInfo from "./student-info";

// copied code from assignment
export default function Page() {
    return (
      <main>
        <h1>Shopping List</h1>
        <StudentInfo/>

        {/* container for back and next links */}
        <div> 
        <Link href="../" className= "text-rose-200 hover:text-rose-500 p-3">← Back</Link>
        <Link href="#" className= "text-rose-200 hover:text-rose-500 p-3">Next →</Link>
        </div>
      </main>
    );
  }