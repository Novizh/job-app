import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from "expo-router";

import styles from './welcome.style'
import { icons, SIZES, COLORS } from "../../../constants";
const jobTypes = ["FULLTIME", "CONTRACTOR", "INTERN", "PARTTIME"]

const Welcome = ({ searchQuery, setSearchQuery, handleClick }) => {
    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState("Full-time")
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello, Naufal!</Text>
                <Text style={styles.welcomeMessage}>Find your perfect job</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                        placeholder="What are you looking for?"
                        placeholderTextColor={COLORS.gray}
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={() => handleClick()}>
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={() => {
                                setActiveJobType(item);
                                router.push(`/search/${item}`)
                            }}
                        >
                            <Text style={styles.tabText(activeJobType, item)}>{item === "FULLTIME" ? "Full-time" : item === "CONTRACTOR" ? "Contract" : item === "INTERN" ? "Internship" : item === "PARTTIME" ? "Part-time" : null}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                />
            </View>
        </View>
    )
}

export default Welcome