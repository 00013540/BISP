import { Stack, TablePaginationProps } from '@mui/material';
import {
    gridPageCountSelector,
    gridPageSelector,
    gridPageSizeSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';

import { RowsPerPageSelector } from '../RowsPerPageSelector';
import { PageSelector } from '../PageSelector';

export const DEFAULT_ROWS_PER_PAGE_OPTIONS = [4, 8, 12];

const CustomPagination = ({
    rowsPerPageOptions = DEFAULT_ROWS_PER_PAGE_OPTIONS,
}: TablePaginationProps) => {
    const apiRef = useGridApiContext();

    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector);

    const handlePageChange = (value: number) => {
        apiRef.current.setPage(value - 1); // Pages are zero-indexed in DataGrid
    };

    return (
        <Stack
            direction="row"
            flex={1}
            alignItems="center"
            justifyContent="space-between"
        >
            <RowsPerPageSelector
                perPage={pageSize}
                onChange={apiRef.current.setPageSize}
                options={rowsPerPageOptions}
            />

            <PageSelector
                pageCount={pageCount}
                page={page + 1}
                onChange={handlePageChange}
            />
        </Stack>
    );
};

export default CustomPagination;
