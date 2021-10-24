import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export default StyleSheet.create({
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
})
