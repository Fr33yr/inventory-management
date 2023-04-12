import { useEffect, useState } from "react";
import { getProviders } from "../../../services/api";
import ProvidersView from './providersview/ProvidersView'

function Providers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getProviders().then((res) => {
      setDataSource(res.users);
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
