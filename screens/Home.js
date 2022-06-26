import { useState } from 'react'
import {  FlatList, SafeAreaView, View, Text } from 'react-native'

import {COLORS , NFTData} from '../constants'
import { HomeHeder,FocusedStatusBar, NFTCard} from '../components'

const Home = () => {
  const [NftData, setNftData] = useState(NFTData)

  const handlePress = (value) => { 
    if(!value.length) return setNftData(NFTData)

    const filterData =  NFTData.filter((item) => 
    item.name.toLowerCase().includes(value.toLowerCase()));

    if(filterData.length) {
      setNftData(filterData)
    }else
    {
      setNftData(NftData)
    }
  }

  return (
   <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar background={COLORS.primary}/>

      <View style={{flex :1}}>
        <View style={{zIndex:0}} >
          
           
           <FlatList data={NftData} 
           renderItem={({item}) => <NFTCard data={item} />}
           keyExtractor={(item) => item.id}
           showsVerticalScrollIndicator={false}
           ListHeaderComponent={<HomeHeder onSearch={handlePress} />}
           />         

        </View>
        <View style={{position:'absolute' ,
             top:0,
             bottom:0,
             right:0,
             left:0,
             zIndex:-1
            }}>
                <View style={{height:300 ,backgroundColor:COLORS.primary}} />
                <View style={{flex:1 ,backgroundColor:COLORS.white}} />
        </View>
      </View>
   </SafeAreaView>
  )
}

export default Home