import { Text, View, Image, Button, Linking, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={{
      height: "100%", width: "100%",
      backgroundColor: "grey", padding: 20, flex: 1, justifyContent: "center", alignItems: "center"
    }}>
      <View style={{ backgroundColor: "blue", height: 410, width: 300, borderRadius: 10, alignItems: "center", paddingTop: 30 }}>

        {/* Matching the existing file name "profile.jpg.jpeg" */}
        <Image source={require("../assets/images/profile.jpg.jpeg")} style={{ height: 150, width: 150, borderRadius: 75, padding: 10 }}>
        </Image>
        <Text style={{ color: "white", fontSize: 20, textAlign: "center", marginTop: 10 }}>YASHWANT KUMAR KASHYAP</Text>
        <Text style={{ color: "white", fontSize: 17, marginTop: 5 }}>"Engineering Idea Into Reality..."</Text>

        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 15, marginTop: 30 }}>

          <Pressable
            onPress={() => Linking.openURL("https://github.com/Yashwantkashyap2005")}
          >
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png" }} style={{ height: 40, width: 40, borderRadius: 20, padding: 8, tintColor: "white" }}>
            </Image>
          </Pressable>

          <Pressable
            onPress={() => Linking.openURL("https://www.linkedin.com/in/yashwant-kumar-kashyap-920578389/")}
          >
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/174/174857.png" }} style={{ height: 40, width: 40, borderRadius: 20, padding: 8, tintColor: "white" }}>
            </Image>
          </Pressable>

          <Pressable
            onPress={() => Linking.openURL("https://www.facebook.com/profile.php?id=100023133647079")}
          >
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png" }} style={{ height: 40, width: 40, borderRadius: 20 }}>
            </Image>
          </Pressable>
        </View>

      </View>

    </View>
  );
}