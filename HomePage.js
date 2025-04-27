import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Haptics from 'expo-haptics';

export default function HomePage() {
    const handlePress = async () => {
        // Play a vibration pattern
        await Haptics.selectionAsync();
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        console.log('Custom Button Pressed!');
    };

    return (
        <View style={styles.homePageContainer}>
            <Text style={styles.title}>This is the HomePage</Text>
            
            <TouchableOpacity style={styles.customButton} onPress={handlePress}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    homePageContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    customButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },
});
