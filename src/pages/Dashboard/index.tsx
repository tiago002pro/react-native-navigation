import React, { useContext } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useAuth } from "../../contexts/auth";

const Dashboard: React.FC = () => {
    const { user, signOut } = useAuth();

    function handleSignOut() {
        signOut();
    }

    return (
        <View style={styles.container}>
            <Text>{user?.name}</Text>
            <Button title="Sign out" onPress={handleSignOut} />
        </View>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});