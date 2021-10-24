import { StyleSheet, TextStyle } from 'react-native'

interface Style {
  InputBox: TextStyle
}

export default StyleSheet.create <Style >({
  InputBox: {
    borderColor: '#282c44',
    borderWidth: 1,
    width: 250,
    fontSize: 14,
    padding: 10,
    marginVertical: 20,
    borderRadius: 3,
  },
})
