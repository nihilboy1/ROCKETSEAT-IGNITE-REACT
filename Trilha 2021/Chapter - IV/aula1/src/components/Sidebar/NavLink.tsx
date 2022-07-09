import {
  Icon,
  Link as ChackraLink,
  LinkProps as ChakraLinkProps,
  Text
} from '@chakra-ui/react'
import { ElementType } from 'react'
import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  title: string
  href: string
}

export function NavLink({ icon, title, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChackraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </ChackraLink>
    </ActiveLink>
  )
}
