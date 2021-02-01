import Image from 'next/image';
import { useEffect } from 'react';
// @ts-ignore
import { LuminousGallery } from 'luminous-lightbox';

type ApiAttributes = {
        origin_path: string,
}

type Path = {
    [key:string]: ApiAttributes,
}

type Props = {
    paths: any,
    domain: string
}

export default function Album({ paths, domain }: Props) {
    useEffect(() => {
        const images = document.querySelectorAll(".luminous-gallery");
        const luminous = new LuminousGallery(images);
    });

    return (
        <>
            <div id="gallery">            
                <ul>
                {
                    paths
                    .filter((path: any) => path.attributes.origin_path != "/com/") // TODO: remove this line after this erroneous entity is removed from the imgix IM
                    .map((path: any) => (
                            <li className="gallery-images">
                                <a className="luminous-gallery" href={domain+path.attributes.origin_path+"?auto=format,compress&w=1200"}>
                                    <Image
                                        src={path.attributes.origin_path}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </a>
                            </li>
                        )
                    )
                }
                </ul>
            </div>
        </>
    )
}
