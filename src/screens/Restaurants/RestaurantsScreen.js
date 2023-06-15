import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { screen } from "../../utils/screenName";

const RestaurantsScreen = (props) => {
  const { navigation } = props;

  const goToAddRestaurant = () => {
    //console.log("Ir a creación de restaurante");
    navigation.navigate(screen.restaurants.addRestaurant);
    //navigation.navigate(screen.account.tab, { screen: screen.account.account });
  };

  return (
    <View>
      <Text>Estamos en la screen de Restaurantes</Text>
      <Button title="Crear Restaurante" onPress={goToAddRestaurant} />
    </View>
  );
};

export default RestaurantsScreen;
