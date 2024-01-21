import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8,
  },
  // renderLogoBox
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },
  imageLogo: {
    flex: 1,
    width: '65%',
    resizeMode: 'contain',
  },
  // renderDividers
  dividerContainer: {
    alignItems: 'center',
  },
  divider: {
    alignItems: 'center',
    height: 1,
    width: '80%',
    backgroundColor: '#01A6B3',
    marginVertical: 10
  },
  // renderCarDetails
  carBrand: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 18,
    fontStyle: 'italic',
  },
  carName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  // renderCarImage
  image: {
    flex: 1,
    marginBottom: 10,
    width: '100%',
    height: '100%',
    resizeMode: "contain"
  },
  // renderPriceControls
  priceLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    paddingBottom: 10,
    marginTop: 10,
  },
  priceLabel: {
    color: '#fff',
    fontSize: 20,
  }
});