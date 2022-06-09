import Head from 'next/head'
// import Image from 'next/image'
import { Image, HStack, Textarea, Flex } from '@chakra-ui/react'
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, IconButton, Input } from '@chakra-ui/react'
import { Button, Center, Grid, GridItem, Text } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { useState,useEffect } from 'react'
import { MdAddTask } from "react-icons/md"

export default function Form() {
    const [input, setInput] = useState('');
    const [isLoading, setIsloading] = useState(false)
    function handleInputChange(e) {
        setInput(e.target.value);
    }
    function tweetHandler() {
        console.log('here')
        setIsloading(!isLoading);
    }
    return (
        <HStack mb={7}>
            <Image
                borderRadius='full'
                boxSize='50px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'

            />
            <FormControl>
                <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="What's Happening?"
                    size='sm'
                    h={50}
                    variant="flushed"
                />
                <Flex dir="row" justify="right">
                    <Button
                        mt={4}
                        isLoading={isLoading}
                        colorScheme='blue'
                        loadingText='Tweeting'
                        spinnerPlacement='start'
                        onClick={tweetHandler}
                        borderRadius={50}
                        w={150}
                        align='right'
                    >
                        Tweet
                    </Button>
                </Flex>
            </FormControl>
        </HStack>
    )
}