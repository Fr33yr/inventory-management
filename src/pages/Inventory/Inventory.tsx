import { DataGrid } from "@mui/x-data-grid";
import { Image } from "../../components/index";
import { ReactElement } from "react";

function Inventory() {
  const imgUrl =
    "https://res.cloudinary.com/da0mjatsk/image/upload/v1663416039/vegetable/kiwi_klczjx.png";

  // Interface de la fila
  interface GridRowsProp {
    id: number;
    image: string;
    col1: string;
    col2: number;
  }

  // Datos de cada fila
  const rows: GridRowsProp[] = [
    {
      id: 1,
      image: imgUrl,
      col1: "Hello",
      col2: 14,
    },
    {
      id: 2,
      image: imgUrl,
      col1: "DataGridPro",
      col2: 111,
    },
    {
      id: 3,
      image: imgUrl,
      col1: "MUI",
      col2: 137,
    },
  ];

  //Interface de la columna
  interface GridColDef {
    field: string;
    headerName: string;
    width: number;
    renderCell?: () => ReactElement | null;
    sortable: boolean;
  }

  // Configuraciones de cada columna
  const columns: GridColDef[] = [
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: () => <Image url={imgUrl} width={50} height={50} />,
      sortable: false,
    },
    {
      field: "col1",
      headerName: "Column 1",
      width: 150,
      sortable: true,
    },
    {
      field: "col2",
      headerName: "Column 2",
      width: 150,
      sortable: true,
    },
  ];

  return (
    <div>
      <h2>Inventory</h2>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default Inventory;
