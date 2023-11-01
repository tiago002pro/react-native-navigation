import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

import AuthRoutes from "./auth.routes";
import { useAuth } from "../contexts/auth";
import AppRoutes from "./app.routes";

const Routes: React.FC = () => {
    const {signed, loading} = useAuth();

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={"large"} color={"#666"}/>
            </View>
        );
    }

    return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});