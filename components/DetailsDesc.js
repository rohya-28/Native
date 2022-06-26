import { View, Text } from 'react-native'
import {useState} from 'react'

import { EthPrice , NFTtitle } from './SubInfo'
import { COLORS , SHADOWS, SIZES, FONTS , assets} from '../constants'


const DetailsDesc = ({ data}) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)

  return (
  <>
    <View style={{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'

    }}>
      <NFTtitle 
      title={data.name}
      subTitle={data.creator}
      titleSize={SIZES.extraLarge}
      subTitleSize={SIZES.font}
      />

      <EthPrice 
      price={data.price}
      />
    </View>

    <View  style={{ marginVertical:SIZES.extraLarge * 1.5 }}>
         <Text style={{
           fontSize:SIZES.font,
           fontFamily:FONTS.semiBold,
           color:COLORS.primary
         }}>
           Description
         </Text>
   
          <View style={{marginTop:SIZES.base}}>
          <Text style={{
           fontSize:SIZES.small,
           fontFamily:FONTS.regular,
           color:COLORS.secondary,
           lineHeight:SIZES.large
         }}>
         {text}
         {!readMore &&  '...'}
         <Text style={{
           fontSize:SIZES.small,
           fontFamily:FONTS.semiBold,
           color:COLORS.primary,
         }}
         onPress={() => {
           if(!readMore)
           {
             setText(data.description)
             setReadMore(true)
           }else
           {
           setText(data.description.slice(0 , 100))
           setReadMore(false) 
           }
         }}
         >
          {readMore ? 'Show less' : 'Show More'}
          </Text>
         </Text>
  

          </View>

    </View>
  </>
  )
}

export default DetailsDesc