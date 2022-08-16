import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

//Card will take one prop - photo card and we will map through to create photo list
export default function Photocard({ photo }) {
  return (
    <>
      <View>
        <Text>{photo.description}</Text>
      </View>
    </>
  );
}

// const styles = StyleSheet.create({});
