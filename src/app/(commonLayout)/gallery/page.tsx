import ImageGallery from "@/components/page/gallery/Gallery"
import Container from "@/components/shared/Container/Container"

const page = () => {
    return (
        <div className="bg-white">
            <section className="py-20 md:py-4 md:min-h-[300px] galley-hero mb-16"></section>
            <Container className="pb-16">
                <h2 className="mb-7 font-semibold font-roboto_slab md:text-2xl lg:text-3xl text-center">Gallery of our recent posts image</h2>
                <ImageGallery />
            </Container>
        </div>
    )
}

export default page