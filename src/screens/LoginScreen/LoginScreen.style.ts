import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface Style {
  Container: ViewStyle
  LoginTitle: TextStyle
  ValidationText: TextStyle
}

export default StyleSheet.create<Style>({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#282c44',
    marginVertical: 30,
  },
  ValidationText: {
    color: 'red',
    fontSize: 10,
    marginLeft: -145,
    marginTop: -5,
  },
})
