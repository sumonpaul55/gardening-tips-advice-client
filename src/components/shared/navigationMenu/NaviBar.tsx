"use client"
import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { logOut } from "@/redux/features/auth/authSlice";

export default function MenuBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const user = useAppSelector(state => state.auth.user)
    const dispatch = useAppDispatch()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    const menuItems = [
        {
            name: "Post",
            url: "post"
        },
        {
            name: "News Feed",
            url: "news-feed"
        }

    ];
    // handle logout
    const handleLogout = () => {
        const toastId = toast.loading("proccessing...");
        dispatch(logOut())
        toast.success("Logout successfull", { id: toastId })
    }


    if (!isClient) {
        return null
    }
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow-lg">
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
                    menuItems?.map((item, idx: number) => {
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
                    user?.email ?
                        <NavbarItem >
                            <Button className="bg-secondary text-white" onClick={handleLogout}>
                                Log Out
                            </Button>
                        </NavbarItem> :
                        <NavbarItem>
                            <Button className="bg-secondary">
                                <Link href="/login" className="text-white">Login</Link>
                            </Button>

                        </NavbarItem>
                }


            </NavbarContent>


            {/* mobile menu */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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
