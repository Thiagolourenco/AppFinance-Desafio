import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: colors.dark,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  card: {
    height: 80,
    width: '90%',
    backgroundColor: colors.dark,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 22,
    color: colors.gray,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 40,
  },
  listCard: {
    height: 60,
    width: '90%',
    marginTop: 10,
    backgroundColor: colors.dark,
    borderRadius: 10,
    padding: 10,
  },
  listCardText: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: '800',
  },
  active: {
    height: 15,
    width: 15,
    borderRadius: 10,
    marginTop: 5,
  },
});

export default styles;
