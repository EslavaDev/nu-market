import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { PrivateStackNavigation } from './private-navigation';
import { fetchConfig } from '../store/config/actions';
import { getConfigLoading } from '../store/config/selectors';
import { ModalNavigation } from './modals';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getConfigLoading);

  let initialRoute = 'main';

  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
        gestureResponseDistance: { vertical: 1000 },
        cardStyle: {
          backgroundColor: '#6C6C6CA4',
        },
      }}>
      <Stack.Screen
        name="Main-Private"
        component={PrivateStackNavigation}
        initialParams={{ initialRoute }}
      />
      {ModalNavigation.map((modalProps) => (
        <Stack.Screen key={modalProps.name} {...modalProps} />
      ))}
    </Stack.Navigator>
  );
};
