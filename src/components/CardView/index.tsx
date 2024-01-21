import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';

import Logo from '../../../assets/logo.png';
import { CarModel } from './props';
import { styles } from './styles';
import { BuyButton } from '../BuyButton';
import { handleNextItem, handlePreviousItem, loadCarData } from './actions';

export function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null)

  useEffect(() => {
    (async () => {
      await loadCarData(1, setCarData);
    })()
  }, [])


  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  )

  const renderDividers = () => (
    <View style={styles.dividerContainer}>
      <View style={styles.divider} />
    </View>
  )

  const renderCarDetails = () => (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  )

  const renderCarImage = () => (
    <Image
      style={styles.image}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`
      }}
    />
  )

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button title="<" color={'#01A6B3'} onPress={() => handlePreviousItem(carData, setCarData)} />
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button title=">" color={'#01A6B3'} onPress={() => handleNextItem(carData, setCarData)} />
    </View>
  )

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}

      {renderDividers()}
      {renderCarDetails()}
      {renderCarImage()}

      {renderDividers()}
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}