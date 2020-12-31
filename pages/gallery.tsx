import Image from 'next/image';

export default function Gallery() {
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