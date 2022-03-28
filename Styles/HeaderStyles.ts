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
  searchBar: {
    maxWidth: '100%',
    space: 5,
    alignSelf: 'center',
  },
  addButton: {
    backgroundColor: '#25d4e8',
  },
  todoListBox: {
    maxWidth: 300,
    width: '100%',
  },
  todoListHeading: {
    marginBottom: 10,
    paddingTop: 50,
  },
  todoList: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoListText: {
    marginHorizontal: 2,
    fontSize: 16,
    width: 150,
  },
  todoListIcon: {
    backgroundColor: '#25d4e8',
    width: 40,
    height: 40,
    borderRadius: 25,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: -50,
    marginRight: 20,
  },
  AddIcon: {
    marginLeft: 5,
    marginTop: 4,
  },
  TodoFormBox: {
    maxWidth: 300,
    width: '100%',
  },
  todoFormHeading: {
    marginBottom: 10,
    paddingTop: 50,
  },
  todoFormIcon: {
    color: '#fff',
    marginTop: 8,
  },
});
