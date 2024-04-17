import React from 'react'
import { ThemeProvider } from '../component/theme-provider'
type Props = {}
import { ModeToggle } from '../component/ModeToggle'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserNav } from "../component/user-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from '@/components/ui/use-toast'
import axios from "axios"
const Navbar = ({ user, setUserData }: any,) => {
  const { toast } = useToast();
  const logoutHandler = async () => {
    try {
      const resposne = await axios.delete("/api/logout");
      setUserData(null)
      toast({
        description: "User logout successfully.",
      })

    } catch (error) {
      console.log("failed to logout user");
    }
  }
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" alt="@shadcn" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logoutHandler}>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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