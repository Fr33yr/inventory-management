import { useEffect, useState } from "react";
import { getDocuments } from "../../../services/api/firebase";
import ProvidersView from './providersview/ProvidersView'

function Providers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getDocuments('providers').then((res:any) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);

  return (
      <>
        <ProvidersView loading={loading} dataSource={dataSource}/>
      </>
  );
}
export default Providers;
