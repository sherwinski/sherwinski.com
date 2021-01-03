import { CMS_NAME } from '../lib/constants'

type Props = {
  id?: string
}

const Intro = ({ id }: Props) => {
  return (
    <section id={id} className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
      </h4>
    </section>
  )
}

export default Intro
