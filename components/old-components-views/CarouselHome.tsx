import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";

const CarouselHome = () => {
  return (
  <View style={styles.carousel}>
  <ImageSlider
    data={[
      { img: require('../assets/images/ctg1.png') },
      { img: require('../assets/images/ctg2.png') },
      { img: require('../assets/images/ctg3.png') },
      { img: require('../assets/images/ctg4.png') },
      { img: require('../assets/images/ctg5.png') },
      { img: require('../assets/images/ctg6.png') },
    ]}
    autoPlay={true}
    timer={4000}
    closeIconColor="#fff"
    localImg={true}
    showHeader={false}
    showIndicator={true}
    headerStyle = {{ display: 'none' }}
    activeIndicatorStyle={{ backgroundColor: '#fff'}}
    indicatorContainerStyle={{ alignItems: 'baseline' }}
  />
</View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    height: 180,
  },
});

export default CarouselHome;
