import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { LoadingDialog } from '../../../components/LoadingDialog';

export function RoomsLoadingDialog() {
  // Rooms Redux state
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.rooms.listLoading }),
    shallowEqual,
  );
  // looking for loading/dispatch
  useEffect(() => {}, [isLoading]);
  return <LoadingDialog isLoading={isLoading} text={"Loading"} />;
}
