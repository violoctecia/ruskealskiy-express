import '@/styles/blocks/gallery.scss';

type Props = {
    images: string[],
    title: string
}
export default function Gallery({images, title}: Props) {
    return (
        <section className="gallery-section">
            <div className="container">
                <h2 className="h2">{title}</h2>
                <div className="images">
                    {images.map((image, index) => (
                        <div className="image" key={index}>
                            <img src={image} loading="lazy" alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}