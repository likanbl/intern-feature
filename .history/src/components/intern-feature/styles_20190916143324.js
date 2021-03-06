import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FCFCFF',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    elevation: 1,
    borderRadius: 5,
    backfaceVisibility: 'hidden',
    backgroundColor: 'white',

    padding: 15,
  },
  avatarView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleView: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 20,
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
