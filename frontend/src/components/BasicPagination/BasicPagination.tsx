import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type BasicPaginationProps = {
  onPageChange: (page: number) => void;
  totalPages: number;
}

const BasicPagination: React.FC<BasicPaginationProps> = ({ onPageChange, totalPages }) => {

  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} onChange={(e, value) => onPageChange(value)} />
    </Stack>
  );
}

export default BasicPagination;