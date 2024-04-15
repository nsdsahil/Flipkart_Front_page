import React from 'react'
import { Box, Flex,Image, Text } from '@chakra-ui/react'
import { DropDown } from './DropDown';
/**
* @author
* @function Categories
**/

export const Categories = ({categories}) => {
    const [isHovered, setIsHovered] = React.useState(false);
    
    const handleMouseEnter = (category) => {
        setIsHovered(true);
        
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }   
  return(
    <Flex p={5} margin={"auto"} justifyContent={"space-between"}>
        {
            categories.map((category) => {
                return (
                    <Box className='category' >
                        <Box margin={"auto"} width={"50%"}><Image src={category.image} alt="" /></Box>
                        <DropDown Categories={category} />
    
                    </Box>
                )
            })
        }
    </Flex>
   )
  }
