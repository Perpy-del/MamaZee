'use client';

import { signOut } from "next-auth/react"

export default function Logout() {
    return (
        <div className="cursor-pointer" onClick={() => {
            signOut();
        }}>
            Logout
        </div>
    )
}