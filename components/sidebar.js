import Head from 'next/head'
import Image from 'next/image'
import { Grid, GridItem, Text } from '@chakra-ui/react'

export default function SideBar() {
    return (
        <>
            <GridItem pl='2' bg='pink.300' area={'nav'}>
                Nav
            </GridItem>
        </>
    )
}