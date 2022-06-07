import { ImgHTMLAttributes } from 'react'

import S from './style.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img {...props} className={hasBorder ? S.avatarWithBorder : S.Avatar} />
  )
}
