import { View, Text, StyleSheet } from 'react-native'
import Header from './Header'

interface LayoutProps {
  tela: string
  children: any
}

export default function Layout(props: LayoutProps) {
  return (
    <View>
      <Header tela={props.tela} />
      <View style={styles.layout}>{props.children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    alignItems: 'flex-start',
    padding: 10
  }
})
