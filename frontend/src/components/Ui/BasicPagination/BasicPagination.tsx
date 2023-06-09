import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface BasicPaginationProps {
  onPageChange: (page: number) => void;
  totalPages: number;
  page: number;
}

export const BasicPagination: React.FC<BasicPaginationProps> = ({ onPageChange, totalPages, page }) => {

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        onChange={(_, value) => onPageChange(value)} 
        page={page}
      />
    </Stack>
  );
}
