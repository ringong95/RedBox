import { StyleSheet } from 'react-native';
import { colors, typography } from './../../config/styles';
export default StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  listView: {
    backgroundColor: colors.LightGrey,
  },
  titleView: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontFamily: typography.fontMainLight,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    flex: .5,

  },
  description: {
    fontFamily: typography.fontMainLight,
    color: colors.MediumGrey,
    padding: 5,
    fontSize: 16
  },
  section: {
    padding: 5,
    backgroundColor: colors.LightGrey
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: colors.Black,
  },
  thumbnail: {
    padding: 5,
    marginRight: 5,
    height: 75,
    width: 75
  },
  sectionText: {
    fontSize: 16,
    paddingLeft: 15,
  },
})
