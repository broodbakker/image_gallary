import React from "react";
import Image from "next/image"

//components
import {
  AspectRatio, Box, chakra, Flex
} from '@chakra-ui/react'
//typescript
import { Iphoto, Iphotos } from "../util/typescript"
import { transformBlurred, transform } from "../util/functions"


const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt", "layout", "priority"].includes(prop)
})

export const PhotoGrid = ({ photos, handleClick }: Iphotos) => {
  return (
    <Box w="100%" mx="auto" >
      <Flex flexWrap={"nowrap"} overflowX="scroll"
        css={{
          '&::-webkit-scrollbar': {
            width: '20px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
            backgroundColor: "#e4e4e4"
          },
          '&::-webkit-scrollbar-thumb': {
            background: "#8070d4",
            borderRadius: "100px",
            border: '5px solid transparent',
            backgroundClip: 'content-box',
          },
        }}>
        {photos.map((photo, index) =>
          <SinglePhoto
            imageLink={photo}
            handleClick={handleClick}
            key={index} />)}
      </Flex>
    </Box>
  )
}

const SinglePhoto = ({ imageLink, handleClick }: Iphoto) => {
  return (
    <Box
      onClick={() => handleClick(imageLink)}>
      <AspectRatio
        ratio={3 / 3} w="150px" objectFit='cover' backgroundImage={transformBlurred(imageLink.url)}
        backgroundSize="cover" >
        <ChakraImage
          layout="fill"
          src={transform(imageLink.url, 300)}
          alt={imageLink.public_id}
          placeholder="blur"
          quality="1"
          cursor="pointer"
        />
      </AspectRatio>
    </Box>
  )
}