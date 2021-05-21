import { Box, Avatar, Text, Flex } from '@chakra-ui/react';

interface ProfileProps{
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Schmaltz</Text>
          <Text color="gray.300" fontSize="small">guuhschmaltz@gmail.com</Text>
        </Box>
      )}
        <Avatar size="md" name="Gustavo Schmaltz"/>
      </Flex>
  );
}