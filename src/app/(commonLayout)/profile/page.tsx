
import Container from '@/components/shared/Container/Container'
import dynamic from 'next/dynamic'

const Profile = () => {
    const ProfilePage = dynamic(() => import('@/components/page/profile/ProfilePage'), { ssr: false })
    return (
        <main className='z-50 bg-white'>
            <Container>
                <ProfilePage />
            </Container>
        </main>
    )
}

export default Profile