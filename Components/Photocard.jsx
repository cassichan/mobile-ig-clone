import React from "react";
import { View, Image, Text, ActivityIndicator } from "react-native";
import { Avatar, Card, Icon } from "react-native-elements";
import { photoCardStyles } from "../assets/styles";

//Card will take one prop - photo. we will map through to create photo list
export default function Photocard({ photo }) {
  const BASE_URL = "https://source.unsplash.com/random?cats=";

  return (
    <View>
      <View style={photoCardStyles.cardContainer}>
        <View style={photoCardStyles.cardHeader}>
          {/* Avatar */}
          <Avatar
            rounded
            sized
            size="small"
            source={{
              uri: `https://randomuser.me/api/portraits/men/${photo.id}.jpg`,
            }}
          />
          <View style={photoCardStyles.cardHeaderText}>
            <Text h5>Cassichan</Text>
            <Text style={photoCardStyles.cardLocation}>Norway</Text>
          </View>
        </View>
        <Icon name="code" />
      </View>
      <Image source={{ uri: BASE_URL + 1 }} style={photoCardStyles.cardImage} PlaceholderContent={<ActivityIndicator/>}/>
      <Text style={photoCardStyles.cardText}>
        The idea with React Native Elements is more about component structure
        than actual design.
      </Text>
      <Card.Divider />
    </View>
  );
}
