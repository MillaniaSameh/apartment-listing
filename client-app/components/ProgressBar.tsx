import CircularProgress from "@mui/material/CircularProgress";

const circularProgressStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
};

function ProgressBar() {
  return (
    <div style={circularProgressStyle}>
      <CircularProgress size="3rem" />
    </div>
  );
}

export default ProgressBar;
