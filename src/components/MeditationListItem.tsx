import { View, Pressable, Text } from "react-native"
import { Meditation } from "../types"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from "expo-router";

export function MeditationListItem({meditation}:{meditation:Meditation}) {
    return(
        <Link href = {`/meditation/${meditation.id}`} asChild>

        <Pressable className="flex-row items-center gap-5">
            <View className="bg-green-700 p-2 rounded-full">
            <FontAwesome name="check" size={18} color="white" />
            </View>
       <View className="flex-1 p-5 py-8 border-2 border-gray-300 rounded-2xl">
          <Text className="font-semibold text-2xl mb-2">
          {meditation.title}
          </Text>
       <View className="flex-row items-center gap-1">
          <FontAwesome5 name="clock" size={16} color="#687280" />
           <Text className="text-gray-600">
           {meditation.duration} min
           </Text>
       </View>
       </View>
       </Pressable>
       </Link>
 )
}