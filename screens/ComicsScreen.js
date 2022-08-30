import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getComics } from '../api/ApiMarvel';

const ComicsScreen = () => {

  const [dataComics, setDataComics] = useState([]);

  async function getComicsData(){
    const data = await getComics();
    setDataComics(data);
  }

  function itemsComics({item}){

    const url = item.thumbnail.path+'/portrait_fantastic.'+item.thumbnail.extension;

    return(
      <View style={{marginBottom: 20, padding: 10}}>
        <Text>{item.title}: {item.description}</Text>
        <Image source={{uri: url}} resizeMode='cover' style={{width: 168, height: 252}}/>
      </View>
    )
  }

  
  useEffect(() => {
    getComicsData();
    
  }, [])

  return (
    <FlatList 
      data={dataComics}
      keyExtractor={x => x.id}
      renderItem={itemsComics}
    />
  )
}

export default ComicsScreen

const styles = StyleSheet.create({})