import * as React from 'react';
import { Box, CssBaseline, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import * as XLSX from 'xlsx'

const excelFilePath = './assets/data/leaderboard.xlsx';

function readExcelFile(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Assuming you want data from the first sheet.
    const worksheet = workbook.Sheets[sheetName];
    const excelData = XLSX.utils.sheet_to_json(worksheet);

    return excelData;
}

// const rows = readExcelFile(excelFilePath);

const rows = [
    { id: 1, name: "Avinav Pandey", email: "avinav@gmail.com", coursesDone: 5, skillBadges: 2, genAI: 4, pathwayCompletion: 2 },
    { id: 2, name: "Avinav Pandey", email: "avinav@gmail.com", coursesDone: 5, skillBadges: 2, genAI: 4, pathwayCompletion: 2 },
    { id: 3, name: "Avinav Pandey", email: "avinav@gmail.com", coursesDone: 5, skillBadges: 2, genAI: 4, pathwayCompletion: 2 },
    { id: 4, name: "Avinav Pandey", email: "avinav@gmail.com", coursesDone: 5, skillBadges: 2, genAI: 4, pathwayCompletion: 2 },
    { id: 5, name: "Avinav Pandey", email: "avinav@gmail.com", coursesDone: 5, skillBadges: 2, genAI: 4, pathwayCompletion: 2 },
];

function HeaderText({ line1, line2 }) {
    return <Typography style={{ lineHeight: '1.2em', textAlign: 'center' }}>{line1}<br />{line2}</Typography>
}


const columns = [
    {
        field: 'id',
        headerName: 'Rank',
        width: 60,
        headerClassName: 'header',
        sortable: false
    },
    {
        field: 'name',
        headerName: 'Name',
        headerClassName: 'header',
        width: 385,
        sortable: false
    },
    {
        field: 'email',
        headerName: 'Email',
        headerClassName: 'header',
        width: 300,
        sortable: false
    },
    {
        field: 'coursesDone',
        headerName: <HeaderText line1={'Courses'} line2={'Done'} />,
        headerClassName: 'header',
        type: 'number',
        width: 80,
    },
    {
        field: 'skillBadges',
        headerName: <HeaderText line1={'Skill badges'} line2={'earned'} />,
        headerClassName: 'header',
        type: 'number',
        width: 120,
    },
    {
        field: 'genAI',
        headerName: <HeaderText line1={'GenAI games'} line2={'completed'} />,
        headerClassName: 'header',
        type: 'number',
        width: 120,
    },
    {
        field: 'pathwayCompletion',
        headerName: <HeaderText line1={'Total completion of'} line2={'Both pathways'} />,
        headerClassName: 'header',
        type: 'number',
        width: 170,
    },
];

function LeaderBoardTablularize() {
    return (
        <Box className="leaderboard" sx={{ 'width': '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                sx={{
                    '& .MuiDataGrid-row': {
                        background: "#fff"
                    },
                    '& .MuiDataGrid-row:nth-of-type(1)': {
                        color: 'hsl(51, 100.00%, 40.00%)',
                        backgroundColor: 'hsl(51, 100.00%, 90.00%)',
                        fontWeight: 'bold'
                    },
                    '& .MuiDataGrid-row:nth-of-type(2)': {
                        color: 'hsl(0, 0.00%, 60%)',
                        backgroundColor: 'hsl(0, 0.00%, 95%)',
                        fontWeight: 'bold'
                    },
                    '& .MuiDataGrid-row:nth-of-type(3)': {
                        color: '#cd7f32',
                        backgroundColor: 'hsl(30, 60.80%,85.00%)',
                        fontWeight: 'bold'
                    },
                    '& .MuiDataGrid-row:hover': {
                        backgroundColor: "hsl(0, 0.00%, 90.00%)"
                    },
                    '& .numbers': {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                getCellClassName={(params) => {
                    if (typeof params.value === 'number') {
                        return 'numbers';
                    }
                    return '';
                }}
                autoHeight
                pageSizeOptions={[10, 50, 100]}
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
                disableEval
                disableRowSelectionOnClick
            />
        </Box>
    );
}



export default function Content() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            width: "100%",
            flexDirection: 'column'
        }}>
            <CssBaseline />
            <LeaderBoardTablularize />
        </Box>
    );
}