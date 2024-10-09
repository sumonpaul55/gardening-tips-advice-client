"use client"
import { contactValidationSchema } from '@/app/(commonLayout)/contact/page'
import GFrom from '@/components/forms/GFrom'
import GInput from '@/components/forms/GInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/react'
import React from 'react'
import { FieldValues, SubmitHandler } from 'react-hook-form'

const ContactForm = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
    return (
        <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg" >
            <GFrom onSubmit={onSubmit} className="mt-6 space-y-5" resolver={zodResolver(contactValidationSchema)}>
                <GInput type="text" label="Name" name="name" />
                <GInput type="email" label="Email" name="email" />
                <GInput type="number" label="Phone" name="phoneNumber" />

                {/* Message field */}
                <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                        name="message"
                        rows={4}
                        className="w-full bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Your message here..."
                    />
                </div>

                {/* File Upload */}


                {/* Submit Button */}
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" type="submit">
                    Send Message
                </Button>
            </GFrom>
        </div>
    )
}

export default ContactForm