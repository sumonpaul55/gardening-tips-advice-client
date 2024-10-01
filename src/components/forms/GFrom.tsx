/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { ReactNode } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

interface IFormProps extends IFormConfig {
    onSubmit: SubmitHandler<any>;
    label?: string;
    children: ReactNode;
    className?: string;
}

interface IFormConfig {
    defaultValue?: Record<string, any>;
    resolver?: any;
}

const GFrom = ({ resolver, defaultValue, onSubmit, children, className }: IFormProps) => {
    const formConfig: IFormConfig = {}

    if (!!defaultValue) {
        formConfig["defaultValue"] = defaultValue
    }
    if (!!resolver) {
        formConfig["resolver"] = resolver
    }
    const methods = useForm(formConfig)
    const submitHanlder = methods.handleSubmit;

    return (
        <FormProvider {...methods}>
            <form onSubmit={submitHanlder(onSubmit)} className={className && className}>
                {children}
            </form>
        </FormProvider>

    )
}

export default GFrom