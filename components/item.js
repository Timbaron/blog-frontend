import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Item.module.css'
import { IconButton } from '@chakra-ui/react'
import { Button, Center, Grid, GridItem, Text } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

export default function Item({item}) {
    return (
        <Center>
            <Button borderRadius={50} className={styles.btn} variant='ghost' mb={5}>{item}</Button>
        </Center>
    )
}