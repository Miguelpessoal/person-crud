import type { NextPage } from 'next'
import { Badge, TableContainer, Table, TableCaption, Tbody, Td, Th, Thead, Tr, IconButton } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
import moment from 'moment'
import { Person } from '../types/Index';

interface PersonListProps {
    people: Person[];
    deletePeople: (id: string) => void;
}

const PersonList: NextPage<PersonListProps> = ({ people, deletePeople }) => {
    if (!people.length) {
        return (
            <Badge colorScheme={"orange"} p={"5"} m={"5"} borderRadius={"lg"}>
                Não há pessoas cadastradas, cadastre uma nova pessoa!
            </Badge>
        )
    }

    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Primeiro Nome</Th>
                        <Th>Sobrenome</Th>
                        <Th isNumeric>Altura</Th>
                        <Th>Data de Nascimento</Th>
                        <Th>Idade</Th>
                        <Th>Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {people.map((person: any) => (
                        <Tr key={person.id}>
                            <Td>{person.firstName}</Td>
                            <Td>{person.secondName}</Td>
                            <Td isNumeric>{person.height / 100}</Td>
                            <Td>{moment(person.birthDate).format('DD-MM-YYYY')}</Td>
                            <Td>{moment(person.birthDate, "YYYYMMDD").fromNow().replace('years', 'anos').replace('days', 'dias').replace('months', 'meses').replace('ago', '')}</Td>
                            <Td><IconButton icon={<FaTrash />} aria-label={''} isRound={true} onClick={() => deletePeople(person.id)} /></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )

}

export default PersonList
