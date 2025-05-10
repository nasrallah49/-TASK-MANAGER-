import React from 'react';
import { StyleSheet, Text } from 'react-native';


export const Title = ({ children }: { children: string }) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#fff'
  },
});
