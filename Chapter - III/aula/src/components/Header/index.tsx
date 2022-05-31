import { SignInButton } from '../SignInButton'
import S from './styles.module.scss'

export function Header() {
  return (
    <header className={S.headerContainer}>
      <div className={S.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={S.active} href="#">
            Home
          </a>
          <a href="#">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}
