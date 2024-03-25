import { s } from "./EventInfo.styles";

import { Txt } from "../../components/DCText/Txt/Txt";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { supabase } from "../../client";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { fetchIcon } from "../../utils/iconfunction";
import { userName } from "../../utils/auth";
export function EventInfo({}) {
  const [show, setShow] = useState(false);
  const [attendees, setAttendees] = useState([]);
  const [join, setJoin] = useState("");
  const { params } = useRoute();

  const nav = useNavigation();
  useEffect(() => {
    setAttendees(params.item.attendees);
  }, []);
  const attendeesMap = attendees.map((people) => {
    return (
      <View style={s.userSubViews} key={people}>
        <TouchableOpacity
          onPress={() => nav.navigate("UserProfile")}
          style={s.userLine}
        >
          <Ionicons name="checkmark-circle" size={24} color="#28143E" />
          <Text style={s.userTxt}>{people}</Text>
        </TouchableOpacity>
      </View>
    );
  });
  const id = params.item.id;
  const updateHappening = async (id) => {
    const { data, error } = await supabase
      .from("Happening")
      .update({ attendees: attendees })
      .eq("id", id);
  };
  const ToggleShow = () => {
    setShow(!show);
  };
  const joinHappening = () => {
    const typedJoin = join.toUpperCase();
    if (typedJoin == "JOIN") {
      const people = attendees.filter((att) => att != userName);
      const people2 = [userName, ...people];
      setAttendees(people2);
      updateHappening(id);
      setShow(!show);
    } else {
      alert("You didn't type JOIN correctly");
    }
  };
  let icon = fetchIcon(params.item.icon);
  return (
    <>
      {show && (
        <View style={s.joinContainer}>
          <Text style={s.happeningName}>{params.item.name}</Text>
          <Text style={s.host}>Host: {params.item.host}</Text>
          <View style={s.sideBySide}>
            <Image source={icon} style={s.icon2Image} />
            <View style={s.textSBS}>
              <Txt style={s.locText}>{params.item.location}</Txt>
              <Txt style={s.joinText}>Date: {params.item.date}</Txt>
              <Txt style={s.joinText}>Time: {params.item.time}</Txt>

              <Txt style={s.joinText}>Address:</Txt>
              <Txt style={s.joinText}>{params.item.address}</Txt>
              <Txt style={s.joinText}>City: {params.item.city}</Txt>
            </View>
          </View>
          <View style={s.descView}>
            <Txt style={s.descriptionTitle}>Happening Description</Txt>
            <Txt style={s.descText}>{params.item.description}</Txt>
          </View>
          <View>
            <TextInput
              style={s.fullInput}
              placeholder="Type JOIN to confirm"
              keyboardType="default"
              onChangeText={(value) => setJoin(value)}
              defaultValue={join}
            />
            <TouchableOpacity style={s.joinBtn} onPress={() => joinHappening()}>
              <Text style={s.joinBtnText}>JOIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.nvmBtn} onPress={() => ToggleShow()}>
              <Text style={s.joinBtnText}>NEVERMIND</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={s.container}>
        <View style={s.topContainer}>
          <Image source={icon} style={s.iconImage} />
          <View style={s.infoView}>
            <Txt style={s.title}>{params.item.name}</Txt>
            <Txt style={s.title}>Host: Craig</Txt>
            <Txt style={s.infoText}>Date: {params.item.date}</Txt>
            <Txt style={s.infoText}>Time: {params.item.time}</Txt>
            <Txt style={s.infoText}>Location: {params.item.location}</Txt>
            <Txt style={(s.infoText, s.labelTextInfo)}>Address:</Txt>
            <Txt style={s.infoText}>{params.item.address}</Txt>
            <Txt style={s.infoText}>City: {params.item.city}</Txt>
          </View>
        </View>
        <View style={s.descriptionContainer}>
          <Txt style={s.descriptionTitle}>Happening Description</Txt>
          <Txt>{params.item.description}</Txt>
        </View>
        <TouchableOpacity
          style={s.createContainer}
          onPress={() => ToggleShow()}
        >
          <Text style={s.createText}>Join Happening</Text>
        </TouchableOpacity>
        <View style={s.playersContainers}>
          <View style={s.attendiesBtn}>
            <Txt style={s.attendiesTitle}>
              Attendees {params.item.attendees.length} /
              {params.item.num_attendees}
            </Txt>
          </View>
        </View>
      </View>
      <ScrollView style={s.attContainer}>
        {attendees && attendeesMap}
      </ScrollView>
    </>
  );
}
