import React from 'react'
import { GrCart } from "react-icons/gr";
import { Button } from '@chakra-ui/react'

/**
* @author
* @function Cart
**/

export const Cart = (props) => {
  return(
    <Button gap={2} size="" variant={"ghost"} backgroundColor={"white"}>
        <GrCart />
        Cart
    </Button>
   )
  }
