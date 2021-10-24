import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface Style {
  ButtonStyle: ViewStyle
  ButtonText: TextStyle
}

export default StyleSheet.create<Style>({
  ButtonStyle: {
    backgroundColor: '#282c44',
    paddingVertical: 15,
    paddingHorizontal: 50,
    width: 250,
    borderRadius: 5,
    marginTop: 150,
  },
  ButtonText: {
    color: 'white',
    textAlign: 'center',
  },
})
