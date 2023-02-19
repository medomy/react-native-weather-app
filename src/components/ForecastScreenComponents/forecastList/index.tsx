import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { ForeCast } from '../../../types/foreCast'
import { ListRenderItem } from 'react-native'
import ForecastRowSecCard from '../forecastCard'

type props = {
    forcastList: ForeCast[]
}
const ForecastList = ({ forcastList }: props) => {
    const renderItem: ListRenderItem<ForeCast> = ({ item }) => (<ForecastRowSecCard forcastDay={item} />)
    return (
        <View style={{ flex: 1, marginTop: "20%" }}>
            <FlatList
                data={forcastList}
                renderItem={renderItem}
                keyExtractor={(item) => item.time_epoch.toString()}
                showsVerticalScrollIndicator={false} />
        </View>
    )
}

export default ForecastList

const styles = StyleSheet.create({})