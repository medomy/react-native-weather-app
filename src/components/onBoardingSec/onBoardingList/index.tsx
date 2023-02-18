import { Animated, FlatList, ListRenderItem, StyleSheet, Text, View, ViewToken } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import OnBoardingItems from '../../../Data/onBoardingItems'
import OnBoardingItemComponent from '../onBoardingItem';
import { OnBoardingItem } from '../../../types/onboardingItem';
import Pagination from '../pagination';

const OnBoardingList = () => {
    // scroll animation determination
    const scrollX = useRef(new Animated.Value(0)).current
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    // reference for flatList
    const listRef = useRef<FlatList<OnBoardingItem> | null>(null);
    // renderer for flatList
    const listRenderer: ListRenderItem<OnBoardingItem> = ({ item, index }) => (<OnBoardingItemComponent item={item} isLast={index === OnBoardingItems.length - 1} />);
    // function for changing view and set active index
    const viewChanged = useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
        setCurrentIndex(viewableItems[0].index ?? 0);
    }, [])
    const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged: viewChanged }])
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 4 }}>
                <FlatList
                    data={OnBoardingItems}
                    renderItem={listRenderer}
                    keyExtractor={(item) => item.title}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    pagingEnabled
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false
                    })}
                    onViewableItemsChanged={viewChanged}
                    scrollEventThrottle={32}
                    ref={listRef} />
            </View>
            <View style={{ flex: 1 }}>
                <Pagination data={OnBoardingItems} selectedIndex={currentIndex} scrollX={scrollX} />
            </View>
        </View>
    )
}

export default OnBoardingList

const styles = StyleSheet.create({})