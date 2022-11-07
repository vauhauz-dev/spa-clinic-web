import { ReactNode } from "react";
import NavBar from "./nav-bar";

export default function NavLayout({ children }: { children: ReactNode }) {
    return <div>
        <NavBar></NavBar>
        {children}
    </div>
}