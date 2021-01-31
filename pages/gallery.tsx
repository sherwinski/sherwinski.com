import Album from '../components/album';
import { getAllImages, getDomain } from '../lib/api';
import Layout from '../components/layout';

type Props = {
    domain: string,
    images: ImageProps
}

type ImageProps = {
    data: string[],
    included: any,
    jsonapi: any,
    meta: any,
}

export default function Gallery(allImages: Props) {
    return (
        <>
            <Layout>
                {
                    allImages.images.data.length > 0 &&
                    <Album
                        paths={allImages.images.data}
                        domain={allImages.domain}
                    />
                }
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const images = await getAllImages();
    const domain = getDomain();
    return {
        props: {
            images: images,
            domain: domain
        }
    }
};
