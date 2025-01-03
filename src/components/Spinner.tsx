import { ClipLoader } from "react-spinners";

const overwrite = {
  display: "block",
  margin: "0 auto",
};

const Spinner = ({ loading }: { loading: boolean }) => {
  return (
    <ClipLoader
      loading={loading}
      cssOverride={overwrite}
      color="#4438ca"
      size={50}
    />
  );
};

export default Spinner;
