import { ReactNode } from "react";
import NavBar from "./nav-bar";

export default function NavLayout({ children }: { children: ReactNode }) {
    return <>
        <NavBar></NavBar>
        {children}
    </>
}