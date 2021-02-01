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

export default function Gallery({ domain, images}: Props) {
    return (
        <>
            <Layout>
                {
                    images.data.length > 0 &&
                    <Album
                        paths={images.data}
                        domain={domain}
                    />
                }
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const domain = getDomain();
    const images = await getAllImages();

    return {
        props: {
            images: images,
            domain: domain
        }
    }
};
