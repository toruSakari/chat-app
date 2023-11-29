import { ComponentProps } from 'react'
import { mergeClassNames } from '@/utils'

const COLOR_MAPPING = {
  gray: 'prose-gray',
  slate: 'prose-slate',
  zinc: 'prose-zinc',
  neutral: 'prose-neutral',
  stone: 'prose-stone'
} as const

const SIZE_MAPPING = {
  sm: 'prose-sm',
  md: 'prose-base',
  lg: 'prose-lg',
  xl: 'prose-xl',
  '2xl': 'prose-2xl'
} as const

type Props = ComponentProps<'p'> & {
  color?: keyof typeof COLOR_MAPPING
  size?: keyof typeof SIZE_MAPPING
}

const Typography = ({ color = 'gray', size = 'md', className, children, ...props }: Props) => {
  return <p className={mergeClassNames('prose', COLOR_MAPPING[color], SIZE_MAPPING[size], className)} {...props}>{ children }</p>
}

export default Typography
