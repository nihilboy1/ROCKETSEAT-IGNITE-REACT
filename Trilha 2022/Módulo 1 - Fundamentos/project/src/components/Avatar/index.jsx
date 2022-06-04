import S from './style.module.css'

export function Avatar({ src, hasBorder = true }) {
  return <img className={hasBorder ? S.avatarWithBorder : S.Avatar} src={src} />
}
