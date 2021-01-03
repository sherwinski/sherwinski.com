type Props = {
  name?: string
  picture: string
  id?: string
}

const Avatar = ({ name, picture, id }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} id={id} className="w-64 h-64 rounded-full" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
