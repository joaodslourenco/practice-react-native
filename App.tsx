import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import Layout from './components/Layout'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Layout />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    marginTop: 35
  }
})
