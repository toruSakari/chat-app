import Image from "next/image"
import { mergeClassNames } from '@/utils'

const SIZE_MAPPING = {
  sm: {
    circle: 'w-5 h-5',
    image: 20,
    svg: 'w-6 h-6'
  },
  md:  {
    circle: 'w-7 h-7',
    image: 28,
    svg: 'w-8 h-8'
  },
  lg:  {
    circle: 'w-10 h-10',
    image: 40,
    svg: 'w-11 h-11'
  },
  xl:  {
    circle: 'w-11 h-11',
    image: 44,
    svg: 'w-12 h-12'
  }
} as const

type Props = {
  src?: string | null
  alt?: string | null
  size?: keyof typeof SIZE_MAPPING
}

const Avatar = ({ src = null, alt, size = 'md' }: Props) => {
  const { image, svg, circle } = SIZE_MAPPING[size]
  return (
    <div className={mergeClassNames('relative overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600', circle)}>
      {
        src ? (
          <Image src={src} loading="lazy" width={image} height={image} alt={alt ?? ''} className={mergeClassNames(circle)}></Image>
        ) : (
          <svg className={mergeClassNames('absolute text-gray-400 -bottom-1 left-1/2 -translate-x-1/2', svg)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        )
      }
    </div>
  )
}

export default Avatar
