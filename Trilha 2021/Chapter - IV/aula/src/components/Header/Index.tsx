import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine, RiSearch2Line } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue(
    {
      base: false,
      lg: true
    },
    'lg'
  )
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="1100px"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justify="end"
    >
      {!isWideVersion && (
        <IconButton
          fontSize="24"
          variant="unstyled"
          aria-label="Open Navigation Menu"
          icon={<Icon as={RiMenuLine} />}
          onClick={onOpen}
          mr="2"
          mt="3"
        ></IconButton>
      )}
      <Logo />
      {isWideVersion ? (
        <SearchBox />
      ) : (
        <Icon as={RiSearch2Line} fontSize="20" />
      )}
      <NotificationsNav />
      <Profile showProfileData={isWideVersion} />
    </Flex>
  )
}
