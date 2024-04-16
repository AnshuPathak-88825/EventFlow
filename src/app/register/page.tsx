"use client"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function page() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit=()=>{
        console.log("hello");
    }
    return (
        <div className="flex h-screen items-center  justify-center">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" placeholder="Max" required onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">UserName</Label>
                                <Input id="last-name" placeholder="Robinson_pych" required onChange={(e) => { setUsername(e.target.value) }} />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <Button type="submit" className="w-full" onClick={handleSubmit}>
                            Create an account
                        </Button>
                        <Button variant="outline" className="w-full" >
                            Sign up with Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}
