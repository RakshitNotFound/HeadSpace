import { Stack } from "expo-router";
import React from "react";
import '../../global.css';

export default function RootLayout() {
return(
    <Stack>
        <Stack.Screen name="index" options={{title:'Meditations', headerTitleAlign: "center", }}/>
    </Stack>
)
}