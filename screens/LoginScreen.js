import { View, Text, TextInput, Button } from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 28, textAlign: "center" }}>Connexion</Text>

      <TextInput
        placeholder="Votre nom"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginVertical: 20, padding: 10 }}
      />

      <Button title="Se connecter" onPress={() => login(name)} />
    </View>
  );
}
