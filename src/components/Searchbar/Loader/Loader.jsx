import { BallTriangle } from 'react-loader-spinner';

export default function Loader() {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="blue"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  );
}
