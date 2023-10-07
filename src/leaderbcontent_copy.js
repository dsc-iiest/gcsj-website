import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import BookIcon from '@mui/icons-material/Book';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import RouteIcon from '@mui/icons-material/Route';

{// const XLSX = require('xlsx');
    // import excelFile from './public/assets/data/'

    // Replace 'your-excel-file.xlsx' with the path to your Excel file.
    // const excelFilePath = 'public/assets/data/leaderboard.xlsx';

    // // Function to read Excel data and convert it to an array of objects.
    // function readExcelFile(filePath) {
    //     const workbook = XLSX.readFile(filePath);
    //     const sheetName = workbook.SheetNames[0]; // Assuming you want data from the first sheet.
    //     const worksheet = workbook.Sheets[sheetName];
    //     const excelData = XLSX.utils.sheet_to_json(worksheet);

    //     return excelData; }


    // // Usage
    // const data = readExcelFile(excelFilePath);
    // console.log(data)
}

const columns = [
    { 
        field: 'id', 
        headerName: 'Rank', 
        width: 50, 
        headerClassName: 'header', },
    {
        field: 'name',
        headerName: 'Name',
        headerClassName: 'header',
        width: 200,
    },
    {
        field: 'email',
        headerName: 'Email',
        headerClassName: 'header',
        width: 150,
    },
    {
        field: 'coursesDone',
        headerName: <BookIcon />,
        headerClassName: 'header',
        type: 'number',
        width: 20,
    },
    {
        field: 'skillBadges',
        headerName: <WorkspacePremiumIcon />,
        headerClassName: 'header',
        type: 'number',
        width: 20,
    },
    {
        field: 'genAI',
        headerName: <SportsEsportsIcon />,
        headerClassName: 'header',
        type: 'number',
        width: 20,
    },
    {
        field: 'pathwayCompletion',
        headerName: <RouteIcon />,
        headerClassName: 'header',
        type: 'number',
        width: 20,
    },
];

const rows = [
    {id: 1, name: "Avinav Pandey", email: "avinav@gmail.com", coursesDone: 5, skillBadges: 2, genAI: 4, pathwayCompletion: 2},
    {id: 2, name: "Avinav Pandey", email: "avinav@gmail.com", coursesDone: 5, skillBadges: 2, genAI: 4, pathwayCompletion: 2},
    {id: 3, name: "Avinav Pandey", email: "avinav@gmail.com", coursesDone: 5, skillBadges: 2, genAI: 4, pathwayCompletion: 2},
    {id: 4, name: "Avinav Pandey", email: "avinav@gmail.com", coursesDone: 5, skillBadges: 2, genAI: 4, pathwayCompletion: 2},
    {id: 5, name: "Avinav Pandey", email: "avinav@gmail.com", coursesDone: 5, skillBadges: 2, genAI: 4, pathwayCompletion: 2},
];

export default function DataGridDemo() {
    console.log("hi there")
    return (
        <Box sx={{ height: 400, width: 'maxwidth' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                sx={{
                    '& .MuiDataGrid-row': {
                      backgroundColor: 'blue',
                      borderRadius: "12px",
                    },
                    '& .MuiDataGrid-row:nth-of-type(2n)': {
                        backgroundColor: 'green'
                    }}}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5, 20, 100]}
            />
        </Box>
    );
}
