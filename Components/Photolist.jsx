import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Photocard from "./Photocard";

const fakePhotos = [
  { id: 1, description: "Selfie with Mom" },
  { id: 2, description: "Photo of breakfast" },
  { id: 3, description: "Airplane wing in sky" },
  { id: 4, description: "My nails painted" },
  { id: 5, description: "My cat fighting a duck" },
  { id: 6, description: "French Bulldog puppy" },
  { id: 7, description: "Wynwood wall graffiti" },
];

export default function Photolist() {
  {
  }
  return (
    <>
      <ScrollView style={styles.photoList}>
        {fakePhotos.map((photo) => (
          <Photocard key={photo.id} photo={photo} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  photoList: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },
});
