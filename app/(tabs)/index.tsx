import { Image, ScrollView, Text, View } from "react-native"; 
import { Link } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "../components/SeachBar";

export default function Index() {
  return (
    <View className="flex-1 bg-primary"> 
     <Image source={images.bg} className="absolute w-full z-0" />
     <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ minHeight: 'auto', paddingBottom: 10}}>
          <Image source={icons.logo} className="flex-1 w-12 h-10 mt-20 mb-5 mx-auto"/>
          <View className="flex-1 mt-5" >
            <SearchBar />
          </View>
     </ScrollView>
    </View>
  )
}