/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/shared/Container/Container"
import PostCardsSection from "@/components/page/posts/postCardSection";
import PostHero from "@/components/page/posts/PostHerosection";

const PostPage = async () => {

    const res = await fetch("http://localhost:5000/api/post", { credentials: "include", cache: 'no-store' })

    const data = await res?.json();



    return (
        <main className="z-50 bg-white md:min-h-screen">
            <PostHero />
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
                    {
                        data?.data?.map((post: { _id: string; title: string; post: any; userId: any; category: { category: string } }, idx: number) => <PostCardsSection post={post} key={idx} />)
                    }
                </div>
            </Container>
        </main>
    )
}

export default PostPage