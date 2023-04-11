import AppRoutes from "../../../routes/index";
import styles from './PageContent.module.css'

function PageContent() {
  return (
    <div className={styles.pagecontent}>
      <AppRoutes />
    </div>
  );
}

export default PageContent;
