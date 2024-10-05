"use client"
import { useGetUserByEmailQuery } from '@/redux/features/auth/auth.api'
import { useAppSelector } from '@/redux/hooks'
import { redirect } from 'next/navigation'
import React from 'react'

const ProfilePage = () => {
    const user = useAppSelector(state => state.auth.user)
    const { data, isLoading } = useGetUserByEmailQuery(`${user?.email}`)


    console.log(user)
    if (!isLoading && !user) {
        return redirect("/")
    }
    if (!user) {
        return null
    }
    return (
        <>
            <div className='mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem qui architecto dolor aliquam explicabo asperiores, veritatis voluptatum, aspernatur voluptas id quam ea, cum distinctio hic quidem doloribus ipsam culpa eveniet saepe dolores. Adipisci error provident optio, modi repellat officiis doloremque, suscipit accusantium maiores officia saepe pariatur quasi autem debitis quis excepturi magnam libero alias? Voluptates est vel eveniet neque delectus libero, culpa harum excepturi cum nihil quae illum modi. Laborum quas assumenda esse beatae ratione temporibus inventore vel soluta nesciunt a est quasi, vitae cumque repellendus eligendi commodi nam impedit velit nisi iste facere? Nemo maiores possimus laudantium hic?
            </div>
        </>
    )
}

export default ProfilePage