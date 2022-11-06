import { Audio } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="#3f51b5"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
