import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Home()
{
  return (
    <Stack spacing={2}>
      <Link href="/table">
        <Button variant="contained">table</Button>
      </Link>
      <Link href="/table/user">
        <Button variant="contained">User</Button>
      </Link>

    </Stack>
  );
}
