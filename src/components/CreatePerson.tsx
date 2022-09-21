import type { NextPage } from 'next'
import { Input, HStack, Button, useToast } from '@chakra-ui/react';
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
            console.log('pow')
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
            <HStack mt={"30px"} mb={"50px"}>
                <Input
                    onChange={(params) => handleEditPersonData('firstName', params.target.value)}
                    variant={"filled"}
                    placeholder='Primeiro Nome'
                    name='firstName'
                // maxWidth={{ base: "90vwm", sm: "80vw", lg: "60vw", xl: "40vw" }}
                />

                <Input
                    onChange={(params) => handleEditPersonData('secondName', params.target.value)}
                    variant={"filled"}
                    placeholder='Segundo Nome'
                    name='secondName'
                />

                <Input
                    onChange={(params) => handleEditPersonData('height', params.target.value)}
                    variant={"filled"}
                    placeholder='Altura (cm)'
                    name='height'
                    type={'number'}
                />

                <Input
                    onChange={(params) => handleEditPersonData('birthDate', params.target.value)}
                    variant={"filled"}
                    placeholder="Data de Nascimento"
                    name='birthDate'
                    type={'date'}
                />
                <Button colorScheme={"orange"} type={"submit"} px={"8"}>
                    Salvar
                </Button>
            </HStack>
        </form>

    )
}


export default CreatePerson
