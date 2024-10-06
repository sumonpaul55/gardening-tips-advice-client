import PubliProfile from "@/components/page/profile/PubliProfile"

const UserProfile = ({ params: userProfile }: { params: { userProfile: string } }) => {

    return (
        <div className="bg-white py-10">
            <PubliProfile userId={userProfile?.userProfile} />
        </div>
    )
}

export default UserProfile