import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box textAlign="right" mr="4">
          <Text>Samuel Seve</Text>
          <Text color="gray.300" fontSize="small">
            samuelseve1@Gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Samuel Seve"
        src="https://github.com/nihilboy1.png"
      />
    </Flex>
  )
}
