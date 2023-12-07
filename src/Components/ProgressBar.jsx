import styles from "./ProgressBar.module.css";
// update progress of status bar by setting the width
//

export const ProgressBar = (props) => {
  console.log("progressBar :", props.progress.currentProgress);
  const progressBarStyles = {
    width: props.progress.currentProgress + "%",
  };
  return (
    <div className="progress">
      <div
        className={`progress-bar`}
        role="progressbar"
        style={progressBarStyles}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {props.progress.currentProgress}%
      </div>
    </div>
  );
};
