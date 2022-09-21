import type { NextPage } from 'next'
import { Input, HStack, Button } from '@chakra-ui/react';
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

    function handleEditPersonData(type: string, value: string) {
        setPersonData({
            ...personData,
            [type]: value
        })
    }

    function handleSubmit(event: FormEvent) {
        const person = {
            id: nanoid(),
            ...personData
        }

        event.preventDefault()


        createPeople(person)
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
