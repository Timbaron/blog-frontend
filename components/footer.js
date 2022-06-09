import Head from 'next/head'
import Image from 'next/image'
import { Grid, GridItem, Text } from '@chakra-ui/react'

export default function Footer() {
    return (
        <>
            <GridItem pl='2' bg='blue.300' area={'footer'}>
                Footer
            </GridItem>
        </>
    )
}