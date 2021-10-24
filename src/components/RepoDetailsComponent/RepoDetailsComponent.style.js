import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  DetailsContainer: {
    width: '100%',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 10,
  },
  LogoContainer: {
    backgroundColor: '#282c44',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  OwnerImage: {
    resizeMode: 'cover',
    height: 120,
    width: 120,
    resizeMode: 'contain',
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  OwnerName: {
    marginTop: 10,
    fontSize: 22,
    color: 'white',
  },
  RepoContainer: {
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  RepoDetails: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  DetailIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  DetailName: {
    color: '#282c44',
    fontSize: 17,
    top: 11,
    paddingLeft: 10,
  },
  ButtonContainer: {
    alignItems: 'center',
    bottom: 50,
  },
})
