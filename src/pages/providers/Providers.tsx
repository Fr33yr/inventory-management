import { useEffect, useState } from "react";
import { getDocuments } from "../../../services/api/firebase";
import ProvidersView from "./providersview/ProvidersView";
import ProvidersForm from "./providersform/ProvidersForm";

function Providers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDocuments("providers").then((res: any) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, []);

  const handleFormOpen = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <ProvidersView loading={loading} dataSource={dataSource} onOpen={handleFormOpen}/>
      {showForm && <ProvidersForm onClose={handleFormClose}/>}
    </>
  );
}
export default Providers;
