import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
   display: 'flex',
   justifyContent: 'center',
   paddingHorizontal: 40,
   height: '100%',
   borderLeftColor: 'white',
  },
  headerText: {
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
  },

  headerNav: {
    fontSize: 13,
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: 'gray',
  }
  
});

export const photoListStyles = StyleSheet.create({
  photoList: {
    flex: 1,
    backgroundColor: "white",
  },
});

export const photoCardStyles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 15,
  },

  cardHeader: {
    marginLeft: 1,
    flexDirection: "row",
  },
  cardHeaderText: {
    marginLeft: 15,
  },
  cardLocation: {
    color: 'gray',
    fontSize: 12,
  },
  cardText: {
    margin: 20,
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
    flex: 1,
  }
});
