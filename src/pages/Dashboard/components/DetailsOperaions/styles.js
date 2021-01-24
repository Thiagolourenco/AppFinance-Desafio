import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/colors';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: '90%',
    paddingTop: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    color: colors.dark,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    marginLeft: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: '800',
  },
  labelInfo: {
    fontSize: 14,
    color: colors.dark,
    fontWeight: 'bold',
    // marginTop: 5,
  },
  contentInfo: {
    width: '90%',
    backgroundColor: colors.gray,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
    marginTop: 10,
  },
});

export default styles;
