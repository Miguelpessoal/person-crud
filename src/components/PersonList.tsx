import type { NextPage } from 'next'
import { HStack, VStack, StackDivider, Text, IconButton, Spacer, Badge } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
import moment from 'moment'
const PersonList: NextPage = ({ people, deletePeople }) => {

    if (!people.length) {
        return (
            <Badge colorScheme={"orange"} p={"5"} m={"5"} borderRadius={"lg"}>
                Não há pessoas cadastradas, cadastre uma nova pessoa!
            </Badge>
        )
    }

    return (
        <VStack

            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth={3}
            borderRadius={"lg"}
            p={5}
            width={"100%"}
            maxWidth={{ base: "90vwm", sm: "80vw", lg: "60vw", xl: "40vw" }}
            alignItems={"stretch"}
        >
            {people.map(person => (
                <HStack key={person.id}>
                    <Text>{person.firstName}</Text>
                    <Text>{person.secondName}</Text>
                    <Text>{person.height}</Text>
                    <Text>{moment(person.birthDate, "YYYYMMDD").fromNow()}</Text>
                    <Spacer />
                    <IconButton icon={<FaTrash />} aria-label={''} isRound={true} onClick={() => deletePeople(person.id)} />
                </HStack>
            ))}
        </VStack>
    )

}

export default PersonList
