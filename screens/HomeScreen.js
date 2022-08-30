import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getCharacters } from '../api/ApiMarvel'

const HomeScreen = () => {

  const [dataCharacters, setDataCharacters] = useState([]);

  const getCharactersData = async () =>{
    const data = await getCharacters();
    setDataCharacters(data);
  }

  function itemsCharacters({item}){

    const url = item.thumbnail.path+'/portrait_fantastic.'+item.thumbnail.extension;

    return(
      <View style={{marginBottom: 20, padding: 10}}>
        <Text>{item.name}: {item.description}</Text>
        <Image source={{uri: url}}  style={{width: 168, height: 252}}/>
      </View>
    )
  }

  useEffect(() => {
    getCharactersData();
  }, [])

  return (
    <FlatList 
      data={dataCharacters}
      keyExtractor={x => x.id}
      renderItem={itemsCharacters}
    />
  )
}

export default HomeScreen

const styles = StyleSheet.create({})