import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FiExternalLink } from 'react-icons/fi';
import ThemeSwitcher from './ThemeSwitcher';

type NavbarLinkProps = { url: string; name: string; isExternal?: boolean };

function NavbarLink({ url, name, isExternal }: NavbarLinkProps) {
  const router = useRouter();

  const activePage = url === router.pathname;

  const activeLinkColor = useColorModeValue(
    activePage ? 'blackAlpha.600' : 'blackAlpha.800',
    activePage ? 'whiteAlpha.600' : 'whiteAlpha.800'
  );

  if (isExternal) {
    return (
      <Button
        target='_blank'
        href={url}
        color={activeLinkColor}
        variant='ghost'
        as='a'
      >
        {name} <FiExternalLink style={{ marginLeft: '2' }} />
      </Button>
    );
  }
  return (
    <Link href={url}>
      <Button color={activeLinkColor} variant='ghost'>
        {name}
      </Button>
    </Link>
  );
}

const Navbar = () => {
  return (
    <Box as='header' py='2' mb='10' bg='blackAlpha.100'>
      <Container maxWidth='6xl' width='full'>
        <Stack
          as='nav'
          direction={['column', 'row']}
          spacing='3'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box
            display='flex'
            alignItems='center'
            flexDirection={['column', 'row']}
          >
            <Text fontWeight='bold' mr='4'>
              KISA BE AGA
            </Text>
            <NavbarLink name='Anasayfa' url='/' />
            <NavbarLink
              name='Github'
              url='https://github.com/UrduX/kisa-be-aga/'
              isExternal
            />
          </Box>
          <ThemeSwitcher />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
