import React, { useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import { signIn} from '../../service/auth';
import AuthContext from "../../contexts/auth";

const SignIn: React.FC = () => {
    const { signed, signIn } = useContext(AuthContext)

    console.log("signed", signed);

    function handleSignIn() {
        signIn();
    }

    return (
        <View style={styles.container}>
            <Button title="Sign in" onPress={handleSignIn} />
        </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });