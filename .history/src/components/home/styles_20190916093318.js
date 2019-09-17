import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    elevation: 2,
    paddingTop: 15,
    borderRadius: 4,
    padding: 15,
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  nameRole: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 20,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 18,
  },
  role: {
    flex: 1,
    fontSize: 14,
  },
  description: {
    flex: 1,
    fontSize: 22,
    color: 'gray',
    paddingTop: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
});
