"use client"
import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger } from "@nextui-org/react";
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { logOut } from "@/redux/features/auth/authSlice";
import Cookies from "js-cookie";
import { useGetUserByEmailQuery } from "@/redux/features/auth/auth.api";
import { MenuItems } from "@/consts/menuItems";
export default function MenuBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const user = useAppSelector(state => state.auth.user)
    const dispatch = useAppDispatch()
    const { data: loggedInuser, isSuccess, } = useGetUserByEmailQuery(`${user?.email}`)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    // handle logout
    const handleLogout = () => {
        const toastId = toast.loading("proccessing...");
        Cookies.remove("accessToken");
        dispatch(logOut())
        toast.success("Logout successfull", { id: toastId })
    }

    if (!isClient && !isSuccess) {
        return null
    }

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow-lg z-[9999]">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/">
                        <Image src="/logo.png" alt="nextLeaf" height={200} width={200} />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    MenuItems?.map((item, idx: number) => {
                        // if (item?.url === "profile" && !user) {
                        //     return null
                        // }
                        return <NavbarItem key={idx}>
                            <Link color="foreground" href={`/${item.url}`}>
                                {item?.name}
                            </Link>
                        </NavbarItem>
                    })
                }
            </NavbarContent>
            <NavbarContent justify="end">
                {
                    user ?
                        <Dropdown>
                            <DropdownTrigger>
                                <Image src={loggedInuser?.data?.profilePhoto} alt={user?.name} width={300} height={300} className="size-12 rounded-full shadow cursor-pointer" />
                            </DropdownTrigger>
                            <DropdownMenu className="m-2">
                                <DropdownItem>
                                    <div className="space-y-2 mb-2 flex flex-col">
                                        <Link href="/user" className="bg-secondary w-full rounded-lg text-white text-md p-2">
                                            Dashborad
                                        </Link>
                                    </div>
                                    <Button className="bg-secondary py-2 w-full h-auto text-white" onClick={handleLogout}>
                                        Log Out
                                    </Button>

                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        :
                        <NavbarItem>
                            <Button className="bg-secondary">
                                <Link href="/login" className="text-white">Login</Link>
                            </Button>
                        </NavbarItem>
                }
            </NavbarContent>


            {/* mobile menu */}
            <NavbarMenu>
                {MenuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === MenuItems?.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={`/${item.url}`}
                            size="lg"
                        >
                            {item?.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    );
}
