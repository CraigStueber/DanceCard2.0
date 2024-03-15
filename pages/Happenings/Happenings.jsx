import { s } from "./Happenings.styles";
import { useState, useEffect } from "react";
import { Txt } from "../../components/DCText/Txt/Txt";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

import { supabase } from "../../client";
import { useNavigation } from "@react-navigation/native";

import { fetchIcon } from "../../utils/iconfunction";
export function Happening({}) {
  const [happenings, setHappenings] = useState([]);
  const [locations, setLocations] = useState([]);

  const nav = useNavigation();

  useEffect(() => {
    const getHappening = async () => {
      const allHappenings = await fetchHappenings();
      setHappenings(allHappenings);
    };
    const getLoc = async () => {
      const allLoc = await fetchLocations();
      setLocations(allLoc);
    };
    getHappening();
    getLoc();
  }, []);

  async function fetchHappenings() {
    let { data: Happening, error } = await supabase
      .from("Happening")
      .select("*");
    if (error) {
      console.error("Error fetching: ", error);
      return;
    } else {
      return Happening;
    }
  }

  async function fetchLocations() {
    let { data: Location, error } = await supabase.from("Location").select("*");

    if (error) {
      console.error("Error fetching: ", error);
      return;
    } else {
      return Location;
    }
  }

  const happeningList = happenings.map((item) => {
    let dice = fetchIcon(item.icon);

    return (
      <TouchableOpacity
        style={s.containerCard}
        key={item.id}
        onPress={() => nav.navigate("EventInfo", { item })}
      >
        <Image style={s.icon} source={dice} />
        <View style={s.textContainer}>
          <Txt style={s.eventTitle}>{item.name}</Txt>
          <View style={s.subTitleContainer}>
            <Txt style={s.date}>{item.date}</Txt>
            <Txt style={s.time}>{item.time}</Txt>
          </View>
          <View style={s.locationContainer}>
            <Txt style={s.location}>{item.location}</Txt>
            <Txt style={s.players}>
              {item.attendees.length} / {item.num_attendees}
            </Txt>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
  return (
    <View style={s.container}>
      <ScrollView>{happenings && <View>{happeningList}</View>}</ScrollView>
    </View>
  );
}
