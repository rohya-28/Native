# Native

Notes

rnfe - to create react native compo

Buttton
//Create Seprate Components like Button
touchbleOpacity = create custimize best button

export const CircleButton = ( {imgUrl, handlePress , ...props}  ) => {
  return (
     <TouchableOpacity style={{
         width:40,
         height:40,
         backgroundColor:COLORS.white,
         position:'absolute',
         borderRadius:SIZES.extraLarge,
         alignItems:'center',
         justifyContent:'center',
         ...SHADOWS.light,
         ...props
         }}
        onPress={handlePress}
     >
        <Image source={imgUrl}
         resizeMode='contain'
         style={{width:24 , height:24 }}
         />

     </TouchableOpacity>
  )
}
