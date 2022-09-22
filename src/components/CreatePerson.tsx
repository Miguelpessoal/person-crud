import type { NextPage } from 'next'
import { Input, HStack, Button, useToast, Box, FormControl, FormLabel } from '@chakra-ui/react';
import { FormEvent, ReactElement, useState } from 'react';
import { nanoid } from 'nanoid';
import { Person } from '../types/Index';

interface CreatePersonProps {
    createPeople: (person: Person) => void;
}

const CreatePerson: NextPage<CreatePersonProps> = ({ createPeople }): ReactElement => {

    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [height, setHeight] = useState<number>()
    const [birthDate, setBirthDate] = useState('')


    const toast = useToast()

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const person = {
            id: nanoid(),
            firstName: firstName,
            secondName: secondName,
            height: height,
            birthDate: birthDate,
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

        createPeople(person as Person)

        setFirstName('')
        setSecondName('')
        setHeight(undefined)
        setBirthDate('')
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <FormControl display="flex" flexDir="column" gap="4" mt={"30px"} mb={"50px"}>
                <HStack spacing="4">
                    <Box w="100%">
                        <FormLabel htmlFor="nome">Primeiro Nome</FormLabel>
                        <Input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            variant={"filled"}
                            placeholder='Primeiro Nome'
                            name='firstName'
                        />
                    </Box>
                    <Box w="100%">
                        <FormLabel htmlFor="email">Segundo Nome</FormLabel>
                        <Input
                            value={secondName}
                            onChange={(e) => setSecondName(e.target.value)}
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
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                            variant={"filled"}
                            placeholder='Centímetros'
                            name='height'
                            type={'number'}
                        />
                    </Box>
                    <Box w="100%">
                        <FormLabel htmlFor="natural">Data de Nascimento</FormLabel>
                        <Input
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
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
