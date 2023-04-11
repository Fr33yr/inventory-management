import { DataGrid } from "@mui/x-data-grid";
import { Image } from "../../components/index";
import { ReactElement } from "react";
import { useEffect, useState } from "react";

function Inventory() {
  const imgUrl =
    "https://res.cloudinary.com/da0mjatsk/image/upload/v1663416039/vegetable/kiwi_klczjx.png";

  const fetchUrl = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  // Interface de la fila
  interface GridRowsProp {
    id: number;
    image: string;
    title: string;
    price: number;
  }

  // Datos de cada fila
  // const rows: GridRowsProp[] = [
  //   {
  //     id: 1,
  //     image: imgUrl,
  //     col1: "Hello",
  //     col2: 14,
  //   },
  //   {
  //     id: 2,
  //     image: imgUrl,
  //     col1: "DataGridPro",
  //     col2: 111,
  //   },
  //   {
  //     id: 3,
  //     image: imgUrl,
  //     col1: "MUI",
  //     col2: 137,
  //   },
  // ];

  //Interface de la columna
  interface GridColDef {
    field: string;
    headerName: string;
    width: number;
    renderCell?: (params: any) => ReactElement | null;
    sortable: boolean;
  }

  // Configuraciones de cada columna
  const columns: GridColDef[] = [
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <Image url={params.value} width={50} height={50} />
      ),
      sortable: false,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      sortable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      sortable: true,
    },
  ];

  return (
    <div>
      <h2>Inventory</h2>
      <div style={{ height: 800, width: 500 }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
          autoHeight
        />
      </div>
    </div>
  );
}

export default Inventory;
