import { StyleSheet, Dimensions, ViewStyle, TextStyle } from 'react-native'

interface Style {
  Container: ViewStyle
  ListContainer: ViewStyle
  NoData: TextStyle
  Loading: ViewStyle
}

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export default StyleSheet.create<Style>({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListContainer: {
    marginTop: 20,
    width: deviceWidth * 0.8,
    height: deviceHeight - 300,
  },
  NoData: {
    textAlign: 'center',
    fontSize: 18,
    color: '#282c44',
  },
  Loading: {
    justifyContent: 'center',
    bottom: deviceHeight / 2 - 20
  }
})
