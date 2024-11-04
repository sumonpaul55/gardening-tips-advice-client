/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import GFrom from "@/components/forms/GFrom"
import GInput from "@/components/forms/GInput"
import Container from "@/components/shared/Container/Container"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { FiExternalLink } from "react-icons/fi";
import Cookies from "js-cookie"
import { FieldValues, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginValidationSchema } from "@/validationSchema/validationSchema"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useLogInMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"
import { verifiyToken } from "@/utils/verifyToken"
import { useAppDispatch } from "@/redux/hooks"
import { setUser } from "@/redux/features/auth/authSlice"
import { useRouter, useSearchParams } from "next/navigation"
import LoadingBlur from "@/components/shared/LoadingBlur"
import React from "react"

const LoginPage = () => {
    const [login, { isLoading, isSuccess }] = useLogInMutation()
    const redirect = useSearchParams().get("redirect");
    const router = useRouter()

    const [showPassword, setShowPassword] = useState<boolean>(true)
    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Logging...")

        try {
            const res = await login(data) as any;
            if (res?.data?.success) {

                // set cookies refresh token
                Cookies.set("refreshToken", res?.data?.data?.refreshToken)
                Cookies.set("accessToken", res?.data?.data?.accessToken)
                const user = verifiyToken(res?.data?.data?.accessToken)
                dispatch(setUser({ user, token: res?.data?.data?.accessToken }))
                toast.success(res?.data?.message, { id: toastId })
            }
            else {
                toast.error(res?.error?.message || res?.error?.data?.message || "Something went wrong", { id: toastId })
            }
        } catch (error: any) {
            toast.error(error)
        }
    }
    if (!isLoading && isSuccess) {
        if (redirect) {
            router.push(redirect)
        } else {
            router.push("/")
        }
    }
    return (
        <div className="bg-white md:min-h-screen">
            {
                isLoading ? <LoadingBlur /> :
                    <Container className="md:mt-32">
                        <div className="max-w-[500px] mx-auto md:mt-10 border p-3 md:p-6 rounded-lg shadow-inner font-roboto_slab">
                            <div className="space-y-1">
                                <h4 className="text-lg md:text-xl font-semibold">Login page</h4>
                                <p className="text-sm">Hi, Welcome Back👏</p>
                            </div>
                            <GFrom onSubmit={onSubmit} className="mt-6 space-y-5" resolver={zodResolver(loginValidationSchema)}>
                                <GInput type="email" label="Email" name="email" clasName="" />
                                <div className="relative">
                                    <GInput type={showPassword ? "password" : "text"} label="Password" name="password" />
                                    {
                                        showPassword ?
                                            <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-[50%] cursor-pointer" onClick={() => setShowPassword(false)} /> :
                                            <FaEye className="absolute right-3 top-1/2 -translate-y-[50%] cursor-pointer" onClick={() => setShowPassword(true)} />
                                    }
                                </div>
                                <div className="text-end">
                                    <p className="text-sm text-secondary font-semibold inline text-end mt-2 cursor-pointer select-none">Forgot password?</p>
                                </div>
                                <Button className="w-full bg-secondary text-white" type="submit">Login</Button>
                            </GFrom>
                            <div className="flex items-center mt-4 flex-wrap">
                                <p>Not Registered yet?</p>
                                <Link className="ml-3 font-semibold text-primary flex items-center gap-2" href="/registration">Create Account <FiExternalLink />
                                </Link>
                            </div>
                            <div className="mt-12 space-y-1">
                                <p>Admin credentials</p>
                                <p>Email: paul@gmail.com</p>
                                <p>Pass: 654321</p>
                            </div>
                        </div>
                    </Container >
            }
        </div>
    )
}

export default LoginPage