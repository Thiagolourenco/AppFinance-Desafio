import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: colors.dark,
    height: '100%',
    width: '100%',
  },
  viewHeaderTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 35,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 27,
    color: colors.white,
    fontWeight: '700',
    marginLeft: 10,
  },
  viewInfoNotUser: {
    flexDirection: 'row',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
    transform: [{ rotate: '15deg' }],
  },
  imageView: {
    height: 30,
    width: 30,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  textSubtitleHeader: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.5)',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
  },
  viewAppFunctions: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
  viewCardIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewIcon: {
    height: 45,
    width: 45,
    borderRadius: 10,
    backgroundColor: colors.white,
    // marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCardIconText: {
    color: 'rgba(255,255,255,0.5)',
    fontWeight: 'bold',
    // marginLeft: 25,
    fontSize: 11,
    marginTop: 10,
  },
  viewScroll: {
    backgroundColor: colors.gray,
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  viewCards: {
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  viewCardHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewCardHeaderTitle: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: 'bold',
  },
  viewCardHeaderButton: {
    fontSize: 14,
    color: colors.blue,
    fontWeight: '700',
  },
  viewCardContent: {
    backgroundColor: colors.white,
    // height: 140,
    width: '100%',
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 10,
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },

    shadowColor: '#222',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  viewCardContentTwo: {
    backgroundColor: colors.white,
    // height: 130,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 10,
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    shadowColor: '#222',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 10,
  },
  viewContent: {
    height: 60,
    width: '100%',
    marginTop: 10,
  },
  viewCardContentItem: {
    flexDirection: 'row',
    margin: 10,
  },
  viewTypeImageCard: {
    height: 30,
    width: 30,
    borderRadius: 8,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageVisa: {
    height: 20,
    width: 20,
  },
  imageMaster: {
    height: 10,
    width: 15,
  },
  viewCardData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  viewCardDataHeader: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  viewCardDataText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  textNumberCard: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 5,
  },
  textNumberCardYear: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 5,
    fontWeight: 'bold',
  },
  viewValueCard: {
    flexDirection: 'column',
    marginRight: 30,
  },
  textValueCardDate: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  textValuePorcetange: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 5,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  viewLine: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: 200,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  viewLineTop: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: 200,
    alignSelf: 'flex-end',
  },
  active: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginLeft: 4,
    marginTop: 5,
    alignItems: 'center',
  },
});

export default styles;
