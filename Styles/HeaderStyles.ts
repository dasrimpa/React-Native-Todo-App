import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  HomeScreen: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    paddingTop: 70,
    paddingBottom: 20,
    fontSize: 25,
  },
  container: {
    backgroundColor: '#25d4e8',
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'center',
    width: 390,
    height: 200,
    maxWidth: '100%',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaContainer: {
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  description: {
    color: 'white',
    marginTop: 20,
    fontSize: 20,
  },
});
