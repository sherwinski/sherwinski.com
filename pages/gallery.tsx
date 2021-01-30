import Album from '../components/album';
import { getAllImages } from '../lib/api';
import Layout from '../components/layout';

type Props = {
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
                    allImages.data.length > 0 &&
                    <Album
                        paths={allImages.data}
                    />
                }
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const images = await getAllImages();

    return {
        props: images
    }
};
