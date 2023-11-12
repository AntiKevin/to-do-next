import WelcomeCard from '@/components/Cards/WelcomeCard';
import { Stack } from '@mui/material';

const page = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
    >
      <WelcomeCard/>
    </Stack>
  )
}

export default page