import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    alignItems: 'center',
  },

  title: {
    marginTop: 40,
    color: '#263238',
    fontFamily: 'OpenSans_700Bold',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 35,
    textAlign: 'center',
  },
  
  subTitle: {
    marginTop: 20,
    fontFamily: 'OpenSans_400Regular',
    color: '#9E9E9E',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
  
  footer: {
    marginTop: '10%',
    alignItems: 'center',
  },
  
  button: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#DA5C5C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans_700Bold',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default styles;
