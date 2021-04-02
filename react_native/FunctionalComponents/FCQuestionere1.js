import React, { useEffect, useState } from "react";
import { StyleSheet,  View, Image } from "react-native";
import { Text, Button } from 'react-native-elements'
import SwipeCards from "react-native-swipe-cards-deck";
import helpers from '../helpers/helperFunctions';
import messages from '../helpers/messages.json';
import myStyles from '../Pages/PageStyle';
import { useNavigation } from '@react-navigation/native';

function Card({ data }) {
  return (
    <View style={[styles.card, { backgroundColor: data.backgroundColor }]}>
      <Text h4 style={{textAlign:'right'}}>{messages.swipeLeftRight}</Text>
      <Image
        source={{ uri: data.wineImgPath }}
        style={myStyles.wine} />
      <Text>{data.wineName}</Text>
      <Text>{data.wineryName}</Text>
    </View>
  );
}

function StatusCard({ toShow }) {
  const [show, setshow] = useState(false)

  useEffect(() => {
   setshow(toShow);
   console.log("show:", show);
  }, [show])

  const navigation = useNavigation();

  const countinueToMainPage = () => {
    navigation.navigate('Home');
  }

  if (show) {
    return (
      <View style={StyleSheet.container}>
        <Text style={styles.cardsText}>{messages.thankYou}</Text>
        <Button
          title={messages.countinue}
          buttonStyle={myStyles.button}
          onPress={countinueToMainPage}
        />
      </View>
    );
  }
  else
    return (
      <View style={StyleSheet.container}>
        <Text style={styles.cardsText}>{messages.prepareQuestions}</Text>
         <Button
          title={messages.skip}
          buttonStyle={myStyles.button}
          onPress={countinueToMainPage}
        />
      </View>
    )
}

export default function FCQuestionere1(props) {
  const [cards, setCards] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000);

    return function cleanup() {
      console.log('CLEANUP');
      setCards([]);
    }
  }, []);

  async function fetchData() {
    await fetch(helpers.getApi() + '/RandomWines?numOfWines=3',
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        return res.json();
      })
      .then(
        (result) => {
          setCards(result);
          console.log(cards);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  const AddToDB = async (data) => {
    //console.log("WINEID", data.wineId);
    let newPrefrence =
    {
      "email":props.route.params.userInfo.email,
      "PrefrenceID": 1,
      "FreeText": data.wineId,
      
    };

    await fetch(helpers.getApi() + '/UserPrefrence',
      {
        method: 'POST',
        body: JSON.stringify(newPrefrence),
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        return JSON.stringify(res);
      }, (error) => {
        alert(error);
      })

  }

  function handleYup(card) {
    console.log(`Yup for ${card.wineId}`);
    AddToDB(card);
    return true; // return false if you wish to cancel the action
  }
  function handleNope(card) {
    console.log(`Nope for ${card.wineName}`);
    return true;
  }


  return (
    <View style={styles.container}>
      {cards ? (
        <SwipeCards
          cards={cards}
          renderCard={(cardData) => <Card data={cardData} />}
          keyExtractor={(cardData) => String(cardData.wineId)}
          renderNoMoreCards={() => <StatusCard  toShow={true}/>}
          handleYup={handleYup}
          handleNope={handleNope}
          yupText={messages.know}
          nopeText={messages.dontKnow}
          showYup
          showNope
          containerStyle={{mrginBottom: 200}}
        />
      ) : (
        <StatusCard text={messages.prepareQuestions} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 250,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#691A1A'
  },
  cardsText: {
    fontSize: 22,
  },
});