"use client"

import { IInputs } from "@/types"
import { Input } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

interface inputprops extends IInputs { type?: string }



const GInput = ({ size = "md", type = "text", variant = "flat", isRequired = true, clasName, name, label }: inputprops) => {


    const { register, formState: { errors } } = useFormContext()


    return (
        <Input {...register(name)} size={size} type={type} label={label} variant={variant} isRequired={isRequired} className={clasName && clasName} errorMessage={errors[name] ? (errors[name].message as string) : ""} isInvalid={!!errors[name]} />
    )
}

export default GInput