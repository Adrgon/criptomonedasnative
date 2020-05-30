import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

const Header = () => (
  <>
    <Text style={styles.encabezado}>Criptomonedas</Text>
  </>
);

const styles = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    backgroundColor: '#5e49E1',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 20,
  },
});

export default Header;
