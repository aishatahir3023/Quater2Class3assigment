import Link from "next/link"

export default function Home() {
  return (
   <div>
     <h1 style={{fontSize: "50px"}}>Welcome to My first Assignment</h1>
  
     <Link href="/students" style={{fontSize:"50px"}}>Students</Link> <br>
     </br>
     <Link href="/employees" style={{fontSize:"50px"}}>Employees</Link>
     <footer>
    
     </footer>

    
 
    </div>
  );
}

