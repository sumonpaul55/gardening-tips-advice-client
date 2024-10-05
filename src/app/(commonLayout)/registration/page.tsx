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
import { registerValidationSchema } from "@/validationSchema/validationSchema"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useRegisterMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { verifiyToken } from "@/utils/verifyToken"
import { setUser } from "@/redux/features/auth/authSlice"
import { useAppDispatch } from "@/redux/hooks"
import LoadingBlur from "@/components/shared/LoadingBlur"

const Registration = () => {

    const dispatch = useAppDispatch()
    const router = useRouter()
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [register, { isLoading }] = useRegisterMutation()
    const [imageFile, setImageFile] = useState<any>()




    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Register processing...")
        const formData = new FormData()
        const name = data?.name.trim()
        const registerData = {
            ...data, name
        }
        formData.append("data", JSON.stringify(registerData))
        formData.append("file", imageFile)
        const res = await register(formData) as any
        if (res?.data?.success) {
            const user = verifiyToken(res?.data?.data?.accessToken)
            // set cookies refresh token
            Cookies.set("refreshToken", res?.data?.data?.refreshToken)
            dispatch(setUser({ user, token: res?.data?.data?.accessToken }))
            toast.success(res?.data?.message, { id: toastId })
            router.push("/")
        } else {
            toast.error(res?.error?.message || res?.error?.data?.message || "Something went wrong", { id: toastId })
        }
    }

    const onChangeFile = (file: any) => {
        setImageFile(file[0])
    }
    return (
        <div className="bg-white md:min-h-screen md:pt-20">
            {
                isLoading && <LoadingBlur />
            }
            <Container className="">
                <div className="max-w-[500px] mx-auto md:mt-10 border p-3 md:p-6 rounded-lg shadow-inner font-roboto_slab">
                    <div className="space-y-1">
                        <h4 className="text-lg md:text-xl font-semibold">Registration</h4>
                        <p className="text-sm">Hi, Welcome👏</p>
                    </div>
                    <GFrom onSubmit={onSubmit} className="mt-6 space-y-5" resolver={zodResolver(registerValidationSchema)}>
                        <GInput type="text" label="Name" name="name" />
                        <GInput type="email" label="Email" name="email" clasName="" />
                        <GInput type="number" label="Phone" name="phoneNumber" clasName="" />
                        <div className="relative">
                            <GInput type={showPassword ? "password" : "text"} label="Password" name="password" />
                            {
                                showPassword ?
                                    <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-[50%] cursor-pointer" onClick={() => setShowPassword(false)} /> :

                                    <FaEye className="absolute right-3 top-1/2 -translate-y-[50%] cursor-pointer" onClick={() => setShowPassword(true)} />
                            }
                        </div>
                        {/* file upload */}
                        <input onChange={(e) => onChangeFile(e.target.files)} type="file" className="w-full bg-gray-100 p-2 rounded-lg" />
                        {
                            <Button className="w-full bg-secondary text-white disabled:bg-disable" type="submit" disabled={!imageFile}>Sign Up</Button>
                        }

                    </GFrom>
                    <div className="flex items-center mt-4 flex-wrap">
                        <p>Do you have account?</p>
                        <Link className="ml-3 font-semibold text-primary flex items-center gap-2" href="/login">Login <FiExternalLink />
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Registration