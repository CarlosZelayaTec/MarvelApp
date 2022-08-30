import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const HomeScreen = () => {

  const [data, setData] = useState([]);

  const fetchApi = async () =>{
    // const response = await fetch('http://gateway.marvel.com/v1/public/comics?apikey=a607ad46e955867cb0306b83d30a2634');
    const response = await fetch('http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=a607ad46e955867cb0306b83d30a2634&hash=f60caff63104de71b8edcf38ab49de9e');
    const {data} = await response.json();
    const {results} = await data;
    // console.log(results);
    setData(results);
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <View>
      {
        data.map((x) => <Text>{x.title}</Text>)
      }
      {/* <Text>HomeScreen</Text> */}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})