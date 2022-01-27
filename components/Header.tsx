import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#B257E6'
  }
})
