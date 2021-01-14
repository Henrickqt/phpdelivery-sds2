import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: '8%',
    marginBottom: '2%',
    marginHorizontal: '2%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 20,
    elevation: 5,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  text: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 19,
    color: '#9E9E9E',
  },
  
  orderName: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 25,
    color: '#263238',
  },
  
  orderPrice: {
    color: '#DA5C5C',
    fontFamily: 'OpenSans_700Bold',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 25,
    textAlign: 'right',
  },
  
  productsList: {
    marginTop: 15,
    paddingTop: 15,
    borderTopColor: '#E6E6E6',
    borderTopWidth: 1,
  },
});

export default styles;
