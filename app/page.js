// HOME PAGE

import Link from "next/link";



export default function Home() {
  return (
    <main>
      <h1 className="text-3xl mt-20 mx-20 mb-5 text-rose-200">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="ms-20 text-xl">
        <li>
          <Link href="./week-2/" className= "text-rose-200 hover:text-rose-500 hover:underline">Week 2 Assignment</Link>
        </li>
        <li>
          <Link href="./week-3/" className= "text-rose-200 hover:text-rose-500 hover:underline">Week 3 Assignment</Link>
        </li>
      </ul>
    </main>
    );
}
