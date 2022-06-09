import Head from 'next/head'
import Image from 'next/image'
import { Grid, GridItem, Text } from '@chakra-ui/react'

export default function Main() {
    return (
        <>
            <GridItem pl='2' w={400} bg='green.300' area={'main'}>
                Main
            </GridItem>
        </>
    )
}