import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnBoardingItems from '../../../Data/onBoardingItems'
import OnBoardingItemComponent from '../onBoardingItem';
import { OnBoardingItem } from '../../../types/onboardingItem';

const OnBoardingList = () => {

    const listRenderer: ListRenderItem<OnBoardingItem> = ({ item, index }) => (<OnBoardingItemComponent item={item} isLast={index === OnBoardingItems.length - 1} />);
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={OnBoardingItems}
                renderItem={listRenderer}
                keyExtractor={(item)=> item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false} />
        </View>
    )
}

export default OnBoardingList

const styles = StyleSheet.create({})