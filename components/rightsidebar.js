import Head from 'next/head'
import Image from 'next/image'
import Item from './item'
import { Grid, GridItem, Text } from '@chakra-ui/react'

export default function LeftSideBar() {
    const items = [
        'Home',

    ]
    return (
        <>
            <GridItem pl='2' w={200} borderRadius="10" color="white" bg='black' p={6} area={'right'}>
                RightSideBar
            </GridItem>
        </>
    )
}