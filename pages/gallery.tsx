import Image from 'next/image';
import { getAllImages } from '../lib/api';

type Props = {
    data: any,
    included: any,
    jsonapi: any,
    meta: any,
}
export default function Gallery(allImages: Props) {
    return (
        <>
            <div id="gallery">            
                <ul>
                    <li>
                        <Image
                            src="/nz1.jpg"
                            layout="intrinsic"
                            width={330}
                            height={500}
                        />
                    </li>
                    <li>
                        <Image
                            src="/nz2.jpg"
                            layout="intrinsic"
                            width={330}
                            height={500}
                        />
                    </li>
                    <li>
                        <Image
                            src="/nz3.jpg"
                            layout="intrinsic"
                            width={600}
                            height={400}
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const images = await getAllImages();

    return {
        props: { images }
    }
};
