import { View, Text , Image} from 'react-native'

import { EthPrice } from './SubInfo'
import { COLORS , SHADOWS, SIZES, FONTS , assets  } from '../constants'

const DetailsBid = ({ bid }) => {
  return (
    <View style={{
     width:'100%',
     flexDirection: 'row',
     justifyContent:'space-between',
     alignItems:'center',
     marginVertical:SIZES.base,
     paddingHorizontal:SIZES.base * 2,

    }}>
       <Image source={bid.image}
       resizeMode='contain'
       style={{width :48 , height:48  }}
       />
      <Text style={{
        fontFamily:FONTS.semiBold,
        fontSize:SIZES.font,
        color:COLORS.primary
      }}>
        bid placed by  {bid.name}
      </Text>

      <Text style={{
        fontFamily:FONTS.regular,
        fontSize:SIZES.font -2,
        color:COLORS.secondary,
        marginTop:3
      }}>
        {bid.data}
      </Text>
    
      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid