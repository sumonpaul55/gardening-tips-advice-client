"use client"

import { IInputs } from "@/types"
import { Input } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

interface inputprops extends IInputs { type?: string; value?: string; isDisabled?: boolean }



const GInput = ({ size = "md", type = "text", variant = "flat", isRequired = true, clasName, name, label, value, isDisabled }: inputprops) => {

    const { register, formState: { errors } } = useFormContext()


    return (
        <Input {...register(name)} value={value && value} size={size} type={type} isDisabled={isDisabled} label={label} variant={variant} isRequired={isRequired} className={clasName && clasName} errorMessage={errors[name] ? (errors[name].message as string) : ""} isInvalid={!!errors[name]} />
    )
}

export default GInput