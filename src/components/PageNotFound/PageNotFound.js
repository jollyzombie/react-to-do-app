import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div>
      <h2 className={styles.title}>
        404 <span>not found ;(</span>
      </h2>
    </div>
  );
};

export default PageNotFound;
