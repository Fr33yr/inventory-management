import { useEffect, useState } from "react";
import InventoryView from "./inventoryview/InventoryView";
import {getDocuments} from '../../../services/api/firebase'
import {IMessage} from '../../models/index'



function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);


  useEffect(()=>{
    getDocuments('products').then((res:any)=>{
      if(res.data){
        setDataSource(res.data)
        console.table(res.data);
      }else if(res.message){
        console.log(res.message)
      }
    })
    .catch((err) => console.log(err))
  },[])
 
  return (
    <>
      <InventoryView loading={loading} dataSource={dataSource} />
    </>
  );
}
export default Inventory;