import { View, StyleSheet, Text } from "react-native";

export default function AboutPage() {
    return (
        <View style={styles.aboutPageContainer}>
            <Text>This is the AboutPage</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    aboutPageContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});