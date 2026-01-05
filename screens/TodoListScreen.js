import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

export default function TodoListScreen({ navigation }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTodos([
        { id: 1, title: "Faire les courses" },
        { id: 2, title: "Sortir le chien" },
        { id: 3, title: "Coder une app RN" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Text style={{ textAlign: "center", marginTop: 50 }}>Chargement...</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={todos}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Détails", {
                id: item.id,
                title: item.title,
              })
            }
          >
            <Text style={{ fontSize: 18, padding: 10 }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
