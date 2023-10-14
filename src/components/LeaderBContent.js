import * as React from "react";
import { Box, CssBaseline, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as XLSX from "xlsx";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function readExcelFile() {
  const filePath = "/assets/data/leaderboard.xlsx";

  return fetch(filePath)
    .then((response) => response.arrayBuffer())
    .then((data) => {
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      return jsonData;
    });
}

const rows = await readExcelFile();
const [courses, skills, genai] = [
  "# of Courses Completed",
  "# of Skill Badges Completed",
  "# of GenAI Game Completed",
];
const sortingFunc = (a, b) => {
  if (
    b[courses] + b[skills] + b[genai] - a[courses] - a[skills] - a[genai] !=
    0
  ) {
    return (
      b[courses] + b[skills] + b[genai] - a[courses] - a[skills] - a[genai]
    );
  } else if (b[courses] - a[courses] != 0) {
    return b[courses] - a[courses];
  } else if (b[skills] - a[skills] != 0) {
    return b[skills] - a[skills];
  } else {
    return b[genai] - a[genai];
  }
};

function toTitleCase(str) {
  const words = str.split(" ");
  const titleCaseWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return titleCaseWords.join(" ");
}

rows.forEach((row, index) => {
  row.id = index + 1;
  row["Student Name"] = toTitleCase(row["Student Name"]);
});

function assignRanks(arr, sortingFunc) {
  const sarr = [...arr];
  sarr.sort(sortingFunc);
  let rank = 1;
  let prev = sarr[0];
  prev.rank = 1;
  for (let i = 1; i < sarr.length; i++) {
    let curr = sarr[i];
    if (
      curr[courses] != prev[courses] ||
      curr[skills] != prev[skills] ||
      curr[genai] != prev[genai]
    ) {
      rank = i + 1;
    }
    sarr[i].rank = rank;
    prev = curr;
  }
  return sarr;
}

const rows_ranked = assignRanks(rows, sortingFunc);
function HeaderText({ line1, line2 }) {
  return (
    <Typography style={{ lineHeight: "1.2em", textAlign: "center" }}>
      {line1}
      <br />
      {line2}
    </Typography>
  );
}

const columns = [
  {
    field: "rank",
    headerName: "Rank",
    width: 60,
    headerClassName: "header",
    sortable: false,
  },
  {
    field: "Student Name",
    headerName: "Name",
    headerClassName: "header",
    width: 350,
    sortable: false,
  },
  {
    field: "# of Courses Completed",
    headerName: <HeaderText line1={"Courses"} line2={"Done"} />,
    headerClassName: "header",
    type: "number",
    width: 120,
  },
  {
    field: "# of Skill Badges Completed",
    headerName: <HeaderText line1={"Skill badges"} line2={"earned"} />,
    headerClassName: "header",
    type: "number",
    width: 120,
  },
  {
    field: "# of GenAI Game Completed",
    headerName: <HeaderText line1={"GenAI games"} line2={"completed"} />,
    headerClassName: "header",
    type: "number",
    width: 120,
  },
  {
    field: "Total Completions of both Pathways",
    headerName: (
      <HeaderText line1={"Total completion of"} line2={"Both pathways"} />
    ),
    headerClassName: "header",
    width: 190,
    renderCell: renderStatusCell,
  },
];

function renderStatusCell(params) {
  const status = params.value;
  if (status === "Yes") {
    return <CheckCircleIcon sx={{ color: "#1ca45c" }} />;
  } else if (status === "No") {
    return <CancelIcon sx={{ color: "#da483b" }} />;
  }
}

const GetRowStyle = (params) => {
  console.log("hello");
  console.log(params.row.rank);
  if (params.row.rank == 1) {
    return "firstpos";
  } else if (params.row.rank == 2) {
    return "secondpos";
  } else if (params.row.rank == 3) {
    return "thirdpos";
  }
  return {};
};

function LeaderBoardTablularize() {
  return (
    <Box className="leaderboard">
      <DataGrid
        rows={rows_ranked}
        columns={columns}
        sx={{
          "& .MuiDataGrid-cell:": {
            display: "flex",
            alignContent: "center",
          },
          "& .numbers": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        getCellClassName={(params) => {
          if (
            typeof params.value === "number" ||
            params.value === "No" ||
            params.value === "Yes"
          ) {
            return "numbers";
          }
          return "";
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <LeaderBoardTablularize />
    </Box>
  );
}
