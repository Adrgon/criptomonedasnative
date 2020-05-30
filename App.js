import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import axios from 'axios';

import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Cotizacion from './componentes/Cotizacion';

const App = () => {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptoMoneda] = useState('');
  const [consutarApi, guardarConsultarAPi] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    const cotizarCriptoMoneda = async () => {
      if (consutarApi) {
        // Consultar la api para obtener la cotizacion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const res = await axios.get(url);
        guardarResultado(res.data.DISPLAY[criptomoneda][moneda]);

        guardarConsultarAPi(false);
      }
    };
    cotizarCriptoMoneda();
  }, [consutarApi, criptomoneda, moneda]);

  return (
    <>
      <ScrollView>
        <View style={styles.contenido}>
          <Header />
          <Image
            style={styles.imagen}
            source={require('./assets/img/cryptomonedas.png')}
          />

          <View style={styles.contenido}>
            <Formulario
              moneda={moneda}
              criptomoneda={criptomoneda}
              guardarMoneda={guardarMoneda}
              guardarCriptoMoneda={guardarCriptoMoneda}
              guardarConsultarAPi={guardarConsultarAPi}
            />
          </View>
        </View>
        <Cotizacion resultado={resultado} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
