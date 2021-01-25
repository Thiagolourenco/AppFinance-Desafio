import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
    textAlign: 'center',
    marginTop: 10,
  },
  viewCard: {
    // height: 100,
    width: '95%',
    backgroundColor: colors.secondary,
    borderRadius: 10,
    alignSelf: 'center',
    padding: 15,
    marginTop: 20,
  },
  viewCardText: {
    fontSize: 16,
    color: colors.gray,
    fontWeight: 'bold',
  },
  input: {
    height: 45,

    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.gray,
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
    marginTop: 15,
  },
  buttonTransfers: {
    backgroundColor: colors.blue,
    height: 50,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
  },
  buttonTransfersText: {
    fontSize: 15,
    color: colors.gray,
    fontWeight: 'bold',
  },
});

export default styles;
