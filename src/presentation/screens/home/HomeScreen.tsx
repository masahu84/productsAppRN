import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import React from 'react';

export const HomeScreen = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      {/* <Icon name="home-outline" /> */}
      <Button accessoryLeft={<Icon name="log-out-outline" />}>
        Cerrar Sesión
      </Button>
    </Layout>
  );
};
