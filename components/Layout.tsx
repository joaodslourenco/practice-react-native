import { View, Text, StyleSheet } from 'react-native'
import Header from './Header'

export default function Layout() {
  return (
    <View>
      <Header />
      <View style={styles.layout}>
        <Text>Hello World aaaaaaaa</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    alignItems: 'flex-start',
    padding: 10
  }
})
