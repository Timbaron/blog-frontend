import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/main.module.css'
import { Grid, GridItem, Text } from '@chakra-ui/react'
import Form from './form'

export default function Main() {
    return (
        <>
            <GridItem pl='2' w={400} p={6} bg='black' color='white' area={'main'} borderRadius="10" className={styles.main}>
            <Form />
                All tweets goes heref3ef
            </GridItem>
            
        </>
    )
}