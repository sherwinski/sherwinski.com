import Image from 'next/image';

type Props = {
  name?: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className="w-64 h-64 rounded-full"
        alt={name}
        layout="fixed"
        width={275}
        height={275}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
