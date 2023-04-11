import React from "react";
import { Table } from "antd";
// Este componente solo se encarga de renderizar
// el contenido de la chart 

function ChartCard() {
 
  return (
    <>
      <Table
        columns={[
          {
            title:"Title",
            dataIndex:"title"
          },
          {
            title:"Quantity",
            dataIndex:"title"
          },
          {
            title:"Price",
            dataIndex:"title"
          },

        ]}
      >        
      </Table>
    </>
  );
}

export default ChartCard;
