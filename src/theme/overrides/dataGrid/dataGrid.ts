import type { Theme } from '@mui/material';

import { CustomPagination } from './components';

const DataGrid = (theme: Theme) => {
    return {
        MuiDataGrid: {
            defaultProps: {
                columnHeaderHeight: 54,
                rowHeight: 54,
                disableColumnMenu: true,
                disableColumnResize: true,
                disableRowSelectionOnClick: true,
                hideFooterSelectedRowCount: true,
                scrollbarSize: 0,
                slots: {
                    pagination: CustomPagination,
                },
                initialState: {
                    pagination: { paginationModel: { pageSize: 4 } },
                },
            },
            styleOverrides: {
                root: {
                    border: 0,
                    borderTop: `1.5px solid ${theme.palette.gray[3]} !important`,

                    '& .MuiDataGrid-filler, & .MuiDataGrid-scrollbarFiller': {
                        display: 'none',
                        border: '0 !important',
                        '--rowBorderColor': 'transparent !important',
                    },

                    '& .MuiDataGrid-scrollbar--vertical': {
                        display: 'none',
                    },

                    '& .MuiDataGrid-topContainer': {
                        padding: theme.spacing(0, 2),
                    },

                    '.MuiDataGrid-columnHeader--sorted': {
                        '& .MuiDataGrid-sortIcon': {
                            color: theme.palette.primary[6],
                        },
                    },

                    '& ::-webkit-scrollbar': {
                        width: '3px',
                        height: '3px',
                    },

                    '& ::-webkit-scrollbar-track': {
                        background: theme.palette.gray['4'],
                    },

                    '& ::-webkit-scrollbar-thumb': {
                        background: theme.palette.gray['6'],
                        borderRadius: '10px',
                        transition: 'all 0.2s',
                    },

                    '& ::-webkit-scrollbar-thumb:hover': {
                        background: theme.palette.gray['7'],
                    },
                },

                columnHeader: {
                    border: '0 !important',
                    padding: theme.spacing(0, 2),

                    '&.MuiDataGrid-columnHeaderCheckbox': {
                        padding: 0,
                    },

                    '&:focus, &:focus-within': {
                        outline: 'none',
                    },
                },

                columnSeparator: {
                    display: 'none',
                },

                columnHeaderTitle: {
                    ...theme.typography.body1,
                    fontWeight: 500,
                },

                cell: {
                    fontSize: theme.typography.body1.fontSize,
                    fontFamily: theme.typography.body1.fontFamily,
                    fontWeight: 500,
                    border: 0,
                    padding: theme.spacing(0, 2),

                    '&:focus, &:focus-within': {
                        outline: 'none',
                    },
                },

                checkboxInput: {
                    color: theme.palette.primary[6],

                    '&.Mui-disabled': {
                        color: theme.palette.text.disabled,
                    },
                },

                row: {
                    padding: theme.spacing(0, 2),

                    '&:hover': {
                        backgroundColor: theme.palette.gray[3],
                    },
                    borderRadius: '0.5em',

                    '& .MuiDataGrid-cell:first-child': {
                        paddingLeft: theme.spacing(6),
                    },

                    '& .MuiDataGrid-cell:last-child': {
                        paddingRight: theme.spacing(6),
                    },
                },

                footerContainer: {
                    paddingTop: theme.spacing(4),
                    borderTop: `1.5px solid ${theme.palette.gray[3]} !important`,
                    minHeight: 50,
                },
            },
        },
    };
};

export default DataGrid;
