import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
  },
  viewInput: {
    height: 45,
    width: '90%',
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.white,
    alignSelf: 'center',
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    marginTop: 15,
    shadowColor: colors.dark,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flexDirection: 'row',
    // border: 0.5,
    borderWidth: 0.2,
    borderColor: colors.dark,
  },
  input: {
    flex: 1,
    width: '100%',
    color: colors.dark,
    marginLeft: 10,
  },
  img: {
    height: 250,
    width: 250,
  },
  buttonAccount: {
    backgroundColor: colors.blue,
    height: 50,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 100,
  },
  buttonAccountText: {
    fontSize: 15,
    color: colors.gray,
    fontWeight: 'bold',
  },
  buttonLogin: {
    height: 50,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonLoginText: {
    fontSize: 15,
    color: colors.blue,
    fontWeight: 'bold',
  },
});

export default styles;
