import React from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-web";

export default function Screen_02({ navigation }) {
  const data1 = [
    require("./assets/Data/smart.png"),
    require("./assets/Data/ipad.png"),
    require("./assets/Data/macbook.png")
  ]
  const data = [
    {
      img: require("./assets/Data/1.png"),
      name: "Smartphone",
      price: "$899",
    },
    {
      img: require("./assets/Data/2.png"),
      name: "Smartphone",
      price: "$899",
    },
    {
      img: require("./assets/Data/3.png"),
      name: "Smartphone",
      price: "$789",
    },
    {
      img: require("./assets/Data/4.png"),
      name: "Smartphone",
      price: "$999",
    },
  ];
  return (
    <View style={{ paddingHorizontal: 20, backgroundColor:'white' }}>
        <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row', backgroundColor:'yellow', flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./assets/Data/search.png')} style={{width: 15, height: 15, marginHorizontal: 10}}/>
                <TextInput placeholder = 'Search' style={{padding: 10, flex: 1}}/>
            </View>
            <Pressable style={{paddingHorizontal: 20, backgroundColor:'yellow', marginLeft: 15, justifyContent:'center', alignItems: 'center'}}>
                <Text>a</Text>
            </Pressable>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between', paddingVertical: 20}}>
            <Text>Categories</Text>
            <Pressable>
                <Text>See all</Text>
            </Pressable>
        </View>
      <ScrollView horizontal={true}>
        <FlatList
            data={data1}
            renderItem={({ item }) => {
                return (
                    <View style={{ padding: 13, backgroundColor:'red', marginRight: 15, borderRadius: 5}}>
                        <Image source={item} style={{ width: 80, height: 80 }} />
                    </View>
                );
            }}
            horizontal={true}
        />
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingTop: 30,
          paddingBottom: 12,
        }}
      >
        <Pressable
          style={{
            borderRadius: 15,
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 2,
          }}
        >
          <Text>Best Sales</Text>
        </Pressable>
        <Pressable
          style={{
            borderRadius: 15,
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 2,
          }}
        >
          <Text>Best Matched</Text>
        </Pressable>
        <Pressable
          style={{
            borderRadius: 15,
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 2,
          }}
        >
          <Text>Popular</Text>
        </Pressable>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                marginVertical: 6,
                borderRadius: 8,
                paddingRight: 10,
              }}
            >
              <Image source={item.img} style={{ width: 100, height: 100 }} />
              <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                <Text>{item.name}</Text>
                <Image
                  source={require("./assets/Data/Rating 5.png")}
                  style={{ width: 100, height: 20 }}
                />
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "space-evenly",
                }}
              >
                <Pressable
                  style={{
                    width: 20,
                    height: 20,
                    borderWidth: 2,
                    borderColor: "red",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{}}>+</Text>
                </Pressable>
                <Text>{item.price}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <Pressable
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
          backgroundColor: "yellow",
          marginTop: 10,
        }}
      >
        <Text>See all</Text>
      </Pressable>
    </View>
  );
}
