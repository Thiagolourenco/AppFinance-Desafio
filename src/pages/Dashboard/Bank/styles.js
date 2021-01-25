import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
    textAlign: 'center',
    marginTop: 10,
  },
  content: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  labelInput: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: '800',
    marginBottom: 3,
  },
  input: {
    height: 45,

    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.white,
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    shadowColor: colors.dark,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flexDirection: 'row',
    borderWidth: 0.2,
    borderColor: colors.dark,
    color: colors.dark,
  },
  viewInput: {
    marginTop: 15,
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
