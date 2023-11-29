import { twMerge, ClassNameValue } from 'tailwind-merge'

const mergeClassNames = (...classNames: ClassNameValue[]) => {
  return twMerge(...classNames)
}

export default mergeClassNames
