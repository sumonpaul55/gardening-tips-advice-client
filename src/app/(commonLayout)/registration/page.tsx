/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import GFrom from "@/components/forms/GFrom"
import GInput from "@/components/forms/GInput"
import Container from "@/components/shared/Container/Container"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { FiExternalLink } from "react-icons/fi";

import { FieldValues, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginValidationSchema } from "@/validationSchema/validationSchema"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

const Registration = () => {
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [file, setFile] = useState<any>()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    const onChangeFile = (file: any) => {
        console.log(file)
        setFile("")
    }
    return (
        <Container>
            <div className="max-w-[500px] mx-auto md:mt-10 border p-3 md:p-6 rounded-lg shadow-inner font-roboto_slab">
                <div className="space-y-1">
                    <h4 className="text-lg md:text-xl font-semibold">Registration</h4>
                    <p className="text-sm">Hi, Welcome👏</p>
                </div>
                <GFrom onSubmit={onSubmit} className="mt-6 space-y-5" resolver={zodResolver(loginValidationSchema)}>
                    <GInput type="text" label="Name" name="name" />
                    <GInput type="email" label="Email" name="email" clasName="" />
                    <div className="relative">
                        <GInput type={showPassword ? "password" : "text"} label="Password" name="password" />
                        {
                            showPassword ?
                                <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-[50%] cursor-pointer" onClick={() => setShowPassword(true)} /> :
                                <FaEye className="absolute right-3 top-1/2 -translate-y-[50%] cursor-pointer" onClick={() => setShowPassword(false)} />
                        }
                    </div>
                    {/* file upload */}
                    <input onChange={(e) => onChangeFile(e.target.files)} type="file" className="w-full bg-gray-100 p-2 rounded-lg" />

                    {/* <button className="text-sm text-secondary font-semibold text-end mt-2 w-full">Forgot password?</button> */}
                    {
                        file &&
                        <Button className="w-full bg-secondary text-white" type="submit">Login</Button>
                    }
                    <Button className="w-full bg-secondary text-white" type="submit">Registration</Button>
                </GFrom>
                <div className="flex items-center mt-4 flex-wrap">
                    <p>Do you have account?</p>
                    <Link className="ml-3 font-semibold text-primary flex items-center gap-2" href="/login">Login <FiExternalLink />
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Registration