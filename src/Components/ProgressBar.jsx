import styles from "./ProgressBar.module.css";

export const ProgressBar = (props) => {
  const progressBarStyles = {
    width: props.progress.currentProgress + "%",
  };
  return (
    <div className={styles.progressBarContainer}>
      <div className={`${styles.progressBar} progress`}>
        <div
          className={`progress-bar`}
          role="progressbar"
          style={progressBarStyles}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          content="progress"
        >
          {props.progress.currentProgress}%
        </div>
      </div>
    </div>
  );
};
