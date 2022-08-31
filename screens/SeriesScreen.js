import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getSeries } from '../api/ApiMarvel';

const SeriesScreen = () => {
  const [dataSeries, setDataSeries] = useState([]);

  const getSeriesData = async () =>{
    const data = await getSeries();
    setDataSeries(data);
  }

  function itemsSeries({item}){

    const url = item.thumbnail.path+'/portrait_fantastic.'+item.thumbnail.extension;

    return(
      <View style={{marginBottom: 20, padding: 10}}>
        <Text>{item.name ?? "No hay informacion"}: {item.description ?? "No hay información"}</Text>
        <Image source={{uri: url}}  style={{width: 168, height: 252}}/>
      </View>
    )
  }

  useEffect(() => {
    getSeriesData();
  }, [])

  return (
    <FlatList 
      data={dataSeries}
      keyExtractor={x => x.id}
      renderItem={itemsSeries}
    />
  )
}

export default SeriesScreen

const styles = StyleSheet.create({})