import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { signInOut } from '../../../store/modules/auth/actions';

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signInOut());
  }, []);

  return <View />;
}
