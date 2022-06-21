import { Stack } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} title="Dashboard" />
        <NavLink icon={RiContactsLine} title="Usuários" />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiGitMergeLine} title="Formulários" />
        <NavLink icon={RiInputMethodLine} title="Automação" />
      </NavSection>
    </Stack>
  )
}
