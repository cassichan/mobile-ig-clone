import React from "react";
import { ScrollView } from "react-native";
import Photocard from "../Components/Photocard";
import { photoListStyles } from "../assets/styles";

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
  return (
    <>
      <ScrollView style={photoListStyles.photoList}>
        {fakePhotos.map((photo) => (
          <Photocard key={photo.id} photo={photo} />
        ))}
      </ScrollView>
    </>
  );
}
