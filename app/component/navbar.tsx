import Link from "next/link";

export default function Navbar() {
    return (
        <header style={{ backgroundColor: "Black", color: "white", height: "40px", width: "full" }}>
            <nav aria-label="Main Navigation">
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Link href="/students/employees" style={{ color: "white", textDecoration: "none" }}>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
