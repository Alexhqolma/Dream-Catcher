import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const BasicPagination: React.FC =() => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
    </Stack>
  );
}

export default BasicPagination;