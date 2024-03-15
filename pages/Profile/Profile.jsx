import { s } from "./Profile.styles";
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { Txt } from "../../components/DCText/Txt/Txt";
import { idNum } from "../../utils/auth";
export function Profile() {
  const [userID, setUserID] = useState("");
  const [userProfile, setUserProfile] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUserProfile();
      setUserProfile(user);
    };
    getUser();
  }, [userID]);

  async function fetchUserProfile() {
    setUserID(idNum);
    let { data: UserProfile, error } = await supabase
      .from("UserProfile")
      .select("*")
      .eq("UserID", userID);
    if (error) {
    
        console.error("Error fetching: ", error);
     
      return;
    } else {
      return UserProfile;
    }
  }
  return (
    <>
      {userProfile &&
        userProfile.map((profile) => {
          return (
            <View style={s.container} key={profile.id}>
              <View style={s.profileContainer}>
                <Image
                  style={s.profileImg}
                  source={{
                    uri: `https://inoxtkubxynhbuslvgyv.supabase.co/storage/v1/object/public/avatar/${profile.avatar}`,
                  }}
                />
                <View style={s.profileInfoContainer}>
                  <Txt style={s.userName}>{profile.UserName}</Txt>
                  <Txt style={s.name}>{profile.FirstName}</Txt>
                  <Txt style={s.userLocation}>
                    {profile.City}, {profile.State}
                  </Txt>
                </View>
              </View>
              <View style={s.discriptionContainer}>
                <Txt style={s.descriptionHeader}>Description</Txt>
                <Txt style={s.descriptionText}>{profile.Description}</Txt>
              </View>
              <View style={s.secondHalf}>
                <View style={s.activities}>
                  <Txt style={s.actHeader}>Favorite Activities</Txt>
                  {profile.Activities.map((activity) => {
                    return (
                      <Txt key={activity} style={s.activity}>
                        {activity}
                      </Txt>
                    );
                  })}
                </View>
                <Image
                  style={s.referenceImg}
                  source={{
                    uri: `https://inoxtkubxynhbuslvgyv.supabase.co/storage/v1/object/public/varPhoto/${profile.varPhoto}`,
                  }}
                />
              </View>
            </View>
          );
        })}
    </>
  );
}
