import * as React from 'react';
import { Box, CssBaseline, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import * as XLSX from 'xlsx';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function readExcelFile() {
    const filePath = '/assets/data/leaderboard.xlsx';

    return fetch(filePath)
        .then((response) => response.arrayBuffer())
        .then((data) => {
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            return jsonData;
        });
}

const rows = await readExcelFile()
rows.forEach((row, index) => {
    row.id = index + 1
});

console.log('here', rows)

function HeaderText({ line1, line2 }) {
    return <Typography style={{ lineHeight: '1.2em', textAlign: 'center' }}>{line1}<br />{line2}</Typography>
}


const columns = [
    {
        field: 'id',
        headerName: 'Rank',
        width: 60,
        headerClassName: 'header',
        sortable: false,
    },
    {
        field: 'Student Name',
        headerName: 'Name',
        headerClassName: 'header',
        width: 350,
        sortable: false
    },
    {
        field: '# of Courses Completed',
        headerName: <HeaderText line1={'Courses'} line2={'Done'} />,
        headerClassName: 'header',
        type: 'number',
        width: 120,
    },
    {
        field: '# of Skill Badges Completed',
        headerName: <HeaderText line1={'Skill badges'} line2={'earned'} />,
        headerClassName: 'header',
        type: 'number',
        width: 120,
    },
    {
        field: '# of GenAI Game Completed',
        headerName: <HeaderText line1={'GenAI games'} line2={'completed'} />,
        headerClassName: 'header',
        type: 'number',
        width: 120,
    },
    {
        field: 'Total Completions of both Pathways',
        headerName: <HeaderText line1={'Total completion of'} line2={'Both pathways'} />,
        headerClassName: 'header',
        width: 190,
        renderCell: renderStatusCell
    },
];

function renderStatusCell(params) {
    const status = params.value;
    if (status === 'Yes') {
        return <CheckCircleIcon sx = {{color:"#1ca45c"} }/>;
    } else if (status === 'No') {
        return <CancelIcon sx = {{color:"#da483b"} }/>;
    }
}

const GetRowStyle = (params) => {
    console.log("hello")
    console.log(params.row.id)
    if (params.row.id == 1) {
        return 'firstpos'
    } else if (params.row.id == 2) {
        return 'secondpos'
    } else if (params.row.id == 3) {
        return 'thirdpos'
    }
    return {};
};


function LeaderBoardTablularize() {
    return (
        <Box className="leaderboard">
            <DataGrid
                rows={rows}
                columns={columns}
                sx={{
                    '& .MuiDataGrid-cell:': {
                        display: "flex",
                        alignContent: "center",
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
                    if (typeof params.value === 'number' || params.value === 'No' || params.value === 'Yes') {
                        return 'numbers';
                    }
                    return '';
                }}
                getRowClassName={GetRowStyle}
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