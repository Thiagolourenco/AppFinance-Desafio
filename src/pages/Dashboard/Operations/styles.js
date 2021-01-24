import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: colors.dark,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  viewInput: {
    // width: '90%',

    marginTop: 10,
  },
  textViewInput: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: '800',
    marginLeft: 20,
    marginBottom: 5,
  },
  input: {
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
    // marginTop: 15,
    shadowColor: colors.dark,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flexDirection: 'row',
    // border: 0.5,
    borderWidth: 0.2,
    borderColor: colors.dark,
    color: colors.dark,
    marginLeft: 10,
  },
  buttonCreate: {
    backgroundColor: colors.blue,
    height: 50,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
  },
  buttonCreateText: {
    fontSize: 15,
    color: colors.gray,
    fontWeight: 'bold',
  },
});

export default styles;
