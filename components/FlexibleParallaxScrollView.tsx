import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  interpolate,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';

type Props = {
  children?: ReactNode;
  contentContainerStyle?: ViewStyle;
  parallaxFactor?: number;
  style?: ViewStyle;
};

export default function FlexibleParallaxScrollView({
  children,
  contentContainerStyle,
  parallaxFactor = 0.5,
  style,
}: Props = {}) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollOffset.value,
      [0, 1000],
      [0, 1000 * parallaxFactor],
      'clamp'
    );

    return {
      transform: [{ translateY }],
    };
  });

  return (
    <ThemedView style={[styles.container, style]}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      >
        {children && (
          <Animated.View style={[styles.content, animatedStyle]}>
            {children}
          </Animated.View>
        )}
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 12,
    gap: 16,
    overflow: 'hidden',
  },
});