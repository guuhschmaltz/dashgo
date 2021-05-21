import { Box, Avatar, Text, Flex } from '@chakra-ui/react';

export function Profile() {
  return(
    <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Gustavo Schmaltz</Text>
          <Text color="gray.300" fontSize="small">guuhschmaltz@gmail.com</Text>
        </Box>
        <Avatar size="md" name="Gustavo Schmaltz"/> 
      </Flex>
  );
}