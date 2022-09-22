import type { NextPage } from 'next'
import { Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react'
import PersonList from '../src/components/PersonList'
import CreatePerson from '../src/components/CreatePerson'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Index: NextPage = () => {

  const [people, setPeople] = useState(() => [])

  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people))
  }, [people])

  function deletePeople(id: number) {
    setPeople(people.filter(person => person.id !== id))
  }

  function createPeople(person: any) {
    setPeople([...people, person])
  }

  return (
    <VStack p={6}>
      <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound={true} size={"lg"} alignSelf={"flex-end"} aria-label={''} onClick={toggleColorMode} />
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
