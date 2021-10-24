import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  ListContainer: {
    width: '100%',
    height: 80,
    borderColor: '#282c44',
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  OwnerImage: {
    resizeMode: 'cover',
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  OwnerName: {
    paddingTop: 20,
    fontSize: 14,
    color: '#282c44',
  },
})
