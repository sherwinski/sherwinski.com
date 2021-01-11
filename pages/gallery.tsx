import Album from '../components/album';
import { getAllImages } from '../lib/api';

type Props = {
    data: string[],
    included: any,
    jsonapi: any,
    meta: any,
}
export default function Gallery(allImages: Props) {
    return (
        <>
            {
                allImages.data.length > 0 &&
                <Album
                    paths={allImages.data}
                />
            }
        </>
    )
}

export const getStaticProps = async () => {
    const images = await getAllImages();

    return {
        props: images
    }
};
