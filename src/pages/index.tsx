import React, { Suspense, lazy } from 'react';
import Welcome from '../components/Welcome';
// eslint-disable-next-line
const Booking = lazy(() => import('@booking/Booking'));

const Main: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Welcome />
      <Booking />
    </Suspense>
  );
};

export default Main;
