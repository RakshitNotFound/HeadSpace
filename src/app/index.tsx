import { Text , FlatList} from "react-native"
import { Meditation } from "../types";
import React from "react";
import { meditations } from "../data"
import { View } from "react-native";
import { MeditationListItem } from "../components/MeditationListItem";


export default function HomeScreen() {
    return (
        <FlatList
        data={meditations}
        className="bg-white"
        contentContainerClassName="gap-8 p-3"
        renderItem={({item}) => <MeditationListItem meditation={item}/>}
        />
    )
}