import type { NextPage } from 'next'
import { Input, HStack, Button, useToast, StackDivider, Box, FormControl, FormLabel, Radio, RadioGroup } from '@chakra-ui/react';
import { FormEvent, ReactElement, useState } from 'react';
import { nanoid } from 'nanoid';

interface CreatePersonProps {
    createPeople: (person: object) => void;
}

const CreatePerson: NextPage<CreatePersonProps> = ({ createPeople }): ReactElement => {

    const [personData, setPersonData] = useState({
        firstName: '',
        secondName: '',
        height: '',
        birthDate: ''
    })

    const toast = useToast()

    function handleEditPersonData(type: string, value: string) {
        setPersonData({
            ...personData,
            [type]: value
        })
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const person = {
            id: nanoid(),
            ...personData
        }

        if (!person.firstName || !person.secondName || !person.height || !person.birthDate) {
            toast({
                title: 'Campos Vazios',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
            return
        }

        createPeople(person)
        setPersonData('')
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <FormControl display="flex" flexDir="column" gap="4" mt={"30px"} mb={"50px"}>
                <HStack spacing="4">
                    <Box w="100%">
                        <FormLabel htmlFor="nome">Primeiro Nome</FormLabel>
                        <Input
                            onChange={(params) => handleEditPersonData('firstName', params.target.value)}
                            variant={"filled"}
                            placeholder='Primeiro Nome'
                            name='firstName'
                        />
                    </Box>
                    <Box w="100%">
                        <FormLabel htmlFor="email">Segundo Nome</FormLabel>
                        <Input
                            onChange={(params) => handleEditPersonData('secondName', params.target.value)}
                            variant={"filled"}
                            placeholder='Segundo Nome'
                            name='secondName'
                        />
                    </Box>
                </HStack>

                <HStack spacing="4">
                    <Box w="100%">
                        <FormLabel htmlFor="nasc">Altura</FormLabel>
                        <Input
                            onChange={(params) => handleEditPersonData('height', params.target.value)}
                            variant={"filled"}
                            placeholder='Centímetros'
                            name='height'
                            type={'number'}
                        />
                    </Box>
                    <Box w="100%">
                        <FormLabel htmlFor="natural">Data de Nascimento</FormLabel>
                        <Input
                            onChange={(params) => handleEditPersonData('birthDate', params.target.value)}
                            variant={"filled"}
                            placeholder="Data de Nascimento"
                            name='birthDate'
                            type={'date'}
                        />
                    </Box>
                </HStack>
                <HStack justify="center">
                    <Button colorScheme={"orange"} type={"submit"} px={"8"}>
                        Salvar
                    </Button>
                </HStack>
            </FormControl>
        </form>

    )
}


export default CreatePerson
