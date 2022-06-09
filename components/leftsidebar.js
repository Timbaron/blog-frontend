import Head from 'next/head'
import Image from 'next/image'
import Item from './item'
import { Button, Center, Grid, GridItem, Text } from '@chakra-ui/react'

export default function LeftSideBar() {
    const buttons = [
        'Home',
        'Search',
        'Explore',
        'Notifications',
        'Messages',
        'Bookmarks',
        'Settings',
        'Profile'
    ]
    return (
        <>
            <GridItem pl='2' w={200} borderRadius="10" p={6} color="white" bg='black' area={'nav'}>
                {/* Loop through buttons array */}
                {buttons.map((button) =>
                    <Item key={button.id} item={button} />
                )}
                <Center>
                    <Button colorScheme='blue' borderRadius={50} w={150} size='lg'>
                        Tweet
                    </Button>
                </Center>
            </GridItem>
        </>
    )
}