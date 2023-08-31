import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

function Home(params) {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return (
                            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                        )
                    },
                    headerRight: () => {
                        return (
                            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                        )
                    },
                    headerTitle: "Job App"
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                    <Welcome
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        handleClick={() => {
                            if (searchQuery) {
                                router.push(`/search/${searchQuery}`)
                            }
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;