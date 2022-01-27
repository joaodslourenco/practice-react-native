import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button
} from 'react-native'
import Botao from './src/components/Botao'
import Header from './src/components/Header'
import Layout from './src/components/Layout'

export default function App() {
  function alerta() {
    console.warn('apertou o botão')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Layout tela="Tela inicial">
        <View>
          <Text>Bem vindo de volta!</Text>
        </View>
        <TextInput
          style={styles.input}
          defaultValue="O que você está buscando?"
        ></TextInput>
        <Button title="enviar" onPress={alerta} />

        <View style={styles.botoesLayout}>
          <Botao texto="Clientes" />
          <Botao texto="Produtos" />
        </View>
      </Layout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    paddingTop: 35
  },
  botoesLayout: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    height: 30,
    width: '100%',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'white'
  }
})
