import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

const CarouselNative: React.FC = () => {
  const [containerWidth, setContainerWidth] = useState(Dimensions.get('window').width);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const images = [
    require('../assets/images/ctg1.png'),
    require('../assets/images/ctg2.png'),
    require('../assets/images/ctg3.png'),
    require('../assets/images/ctg4.png'),
    require('../assets/images/ctg5.png'),
    require('../assets/images/ctg6.png'),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollViewRef.current) {
        if (activeIndex === images.length - 1) {
          scrollViewRef.current.scrollTo({ x: 0, animated: true });
        } else {
          scrollViewRef.current.scrollTo({ x: containerWidth * (activeIndex + 1), animated: true });
        }
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [activeIndex, images.length, containerWidth]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / containerWidth);
    setActiveIndex(newIndex);
  };

  const onLayout = (event: { nativeEvent: { layout: { width: number } } }) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={[styles.image, { width: containerWidth }]}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex ? styles.paginationDotActive : null,
            ]}
            onPress={() => {
              scrollViewRef.current?.scrollTo({ x: containerWidth * index, animated: true });
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
  },
  image: {
    height: 180,
    borderRadius: 20,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  paginationDotActive: {
    backgroundColor: '#fff',
  },
});

export default CarouselNative;