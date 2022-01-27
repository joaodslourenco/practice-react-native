import { View, Text, StyleSheet } from 'react-native'

interface BotaoProps {
  texto: string
}

export default function Botao(props: BotaoProps) {
  return (
    <View style={styles.botao}>
      <Text>{props.texto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: 'purple',
    padding: 20,
    borderRadius: 10
  }
})
