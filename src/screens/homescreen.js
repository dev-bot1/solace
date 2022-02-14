import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NOTEPAD from "./notepad";
import BLOGS from "./blogs";

export default function HOME() {
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.upperTag}>
          <ImageBackground
            style={styles.image}
            source={require("../../media/Path4.png")}
          >
            <Text style={styles.text}>
              Hey! How are you feeling? Just 2 more days to go.
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.midTag}>
          <Image
            style={styles.calender}
            source={require("../../media/Calender.png")}
          />
          <View style={styles.midTagRight}>
            <TouchableOpacity /*onPress={() => {}}*/>
              <View style={styles.notepad}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontFamily: "Helvetica",
                    fontWeight: "500",
                  }}
                >
                  Notepad
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity /*onPress={() => {}}*/>
              <View style={styles.blogs}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontFamily: "Helvetica",
                    fontWeight: "500",
                  }}
                >
                  Blogs
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lowerTag}>
          <Text style={styles.lowerTagTextHeading}>
            What others are feeling at Solace?
          </Text>
          <Text style={styles.lowerTagText}>
            Sample text dgthdgrdg grgdrgfrd rgtrgedg
          </Text>
          <Text style={styles.lowerTagText}>
            Sample text rgredgfesfsf rgedgsfd
          </Text>
          <Text style={styles.lowerTagText}>
            Sample text rgegefrtyhty ujuyjytheg
          </Text>
          <TextInput
            style={styles.lowerTagText}
            placeholder="Share what you are feeling today"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FF7BBE",
    paddingBottom: 20,
  },
  image: {
    resizeMode: "contain",
    marginTop: 40,
    marginHorizontal: "auto",
    width: 250,
    height: 155,
  },
  text: {
    width: 200,
    textAlign: "center",
    marginHorizontal: "auto",
    fontSize: 22,
    marginTop: 15,
    fontFamily: "Cursive",
    fontWeight: "600",
  },
  calender: {
    resizeMode: "contain",
    width: 150,
    height: 150,
  },
  midTag: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  midTagRight: {
    flexDirection: "column",
  },
  notepad: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    width: 175,
    borderColor: "#414141",
    borderWidth: 1.5,
    backgroundColor: "#12171a",
  },
  blogs: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    width: 175,
    borderColor: "#414141",
    borderWidth: 1.5,
    backgroundColor: "#12171a",
  },
  lowerTag: {
    marginTop: 40,
    backgroundColor: "#F5F5F5",
    width: "80%",
    justifyContent: "center",
    margin: "auto",
    padding: 10,
    borderColor: "#A8A8A8",
    borderWidth: 1,
    borderRadius: 15,
  },
  lowerTagText: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    margin: 8,
    textAlign: "center",
    fontSize: 16,
  },
  lowerTagTextHeading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    padding: 10,
  },
});
