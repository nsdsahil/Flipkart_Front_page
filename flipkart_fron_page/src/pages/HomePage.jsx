import React from 'react'
import { Categories } from '../components/Categories'
import {data} from '../database/categories'
import {Crousel} from '../components/Crousel'
import {Cards} from '../components/Cards'
import {cards} from '../database/cards'
import {GridBanner} from '../components/grid'
/**
* @author
* @function HomePage
**/

export const HomePage = (props) => {
  return(
    <>
    <Categories categories={data}/>
    <Crousel/>
    <Cards cards={cards}/>
    <GridBanner/>
    </>
   )
  }
