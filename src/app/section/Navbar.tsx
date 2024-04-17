import React from 'react'
import { ThemeProvider } from '../component/theme-provider'
type Props = {}
import { ModeToggle } from '../component/ModeToggle'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserNav } from "../component/user-nav"

const Navbar = ({ user }: any) => {
  // console.log(user);
  return (
    <div className="flex border-b mb-[50px]	justify-between		  ">
      <div className="font-bold p-4 ">
        <Link href={"/"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            eventflow
          </p>
        </Link>
      </div>
      <div className="flex justify-center items-center pr-8 ">
        <div className="p-1"><ModeToggle /></div>
        <div className="p-1">
          {user ? (
            <UserNav user={user} />
          ) : (
            <div>
              <Link href="/login" passHref><Button variant="ghost" className="m-1">Signin</Button></Link>
              <Link href="/register" passHref><Button className="m-1">Signup</Button></Link>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Navbar