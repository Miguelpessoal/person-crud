import type { NextPage } from 'next'
import { Heading, VStack, IconButton } from '@chakra-ui/react'
import PersonList from '../src/components/PersonList'
import CreatePerson from '../src/components/CreatePerson'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Index: NextPage = () => {
  const initialPeople = [
    {
      id: 1,
      firstName: 'Miguel Antônio',
      secondName: 'Souza e Silva',
      height: 1.87,
      birthDate: '12/07/2002',
    },
    {
      id: 2,
      firstName: 'Ícaro Antônio',
      secondName: 'Souza e Silva',
      height: 1.77,
      birthDate: '05/08/2008',
    }
  ]

  const [people, setPeople] = useState(initialPeople)

  function deletePeople(id: number) {
    setPeople(people.filter(person => person.id !== id))
  }

  function createPeople(person: any) {
    setPeople([...people, person])
  }

  return (
    <VStack p={6}>
      <IconButton icon={<FaSun />} isRound={"true"} size={"lg"} alignSelf={"flex-end"} />
      <Heading
        mb={8}
        bgGradient={"linear(to-r, red.500, orange.400, yellow.600 )"}
        fontWeight={"extrabold"}
        bgClip={"text"}
        fontSize={"5xl"}
      >
        Formulário de Pessoa
      </Heading>
      <CreatePerson createPeople={createPeople} />
      <PersonList people={people} deletePeople={deletePeople} />
    </VStack>

  )
}

export default Index
