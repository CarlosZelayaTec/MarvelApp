import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getComics } from '../api/ApiMarvel';

const ComicsScreen = () => {

  const [dataComics, setDataComics] = useState([]);

  async function getComicsData(){
    const data = await getComics();
    // console.log(data);
    setDataComics(data);
  }

  useEffect(() => {
    getComicsData();
  }, [])

  return (
    <View>
      {dataComics.map((x) => <Text>{x.title}</Text>)}
    </View>
  )
}

export default ComicsScreen

const styles = StyleSheet.create({})