import Image from 'next/image';

type Path = {
    attributes: {
        origin_path: string,
    }
}
type Props = {
    paths: any
}

export default function Album({ paths }: Props) {
    return (
        <>
            <div id="gallery">            
                <ul>
                {paths
                .filter((path: any) => path.attributes.origin_path != "/com/") // TODO: remove this line after this erroneous entity is removed from the imgix IM
                .map((path: any) => (
                        <li>
                            <Image
                                src={path.attributes.origin_path}
                                layout="intrinsic"
                                key={path.attributes.origin_path}
                                width={330}
                                height={500}
                            />
                        </li>    
                ))}
                </ul>
            </div>
        </>
    )
}
