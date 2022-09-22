import type { NextPage } from 'next'
import { Heading, VStack, IconButton, useColorMode, Tooltip } from '@chakra-ui/react'
import PersonList from '../src/components/PersonList'
import CreatePerson from '../src/components/CreatePerson'
import { FaSun, FaMoon, FaTrash, FaFileExport } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Index: NextPage = () => {

  const [people, setPeople] = useState([])

  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    const data = localStorage.getItem('people')

    if (data !== null) {
      setPeople(JSON.parse(data))
    }

  }, [])

  useEffect(() => {
    window.localStorage.setItem('people', JSON.stringify(people))
  }, [people])

  function deletePeople(id: number) {
    setPeople(people.filter(person => person.id !== id))
  }

  function createPeople(person: any) {
    setPeople([...people, person])
  }

  function clearPeople() {
    setPeople([])
  }

  function showLocalStorage() {
    //
  }

  return (
    <VStack p={6}>
      <Tooltip label='Alterar Tema'>
        <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound={true} size={"lg"} alignSelf={"flex-end"} aria-label={''} onClick={toggleColorMode} />
      </Tooltip>

      <Tooltip label='Limpar Registros'>
        <IconButton icon={<FaTrash />} isRound={true} size={"lg"} alignSelf={"flex-end"} aria-label={''} onClick={clearPeople} />
      </Tooltip>
      <Tooltip label='Exibir JSON'>
        <IconButton icon={<FaFileExport />} isRound={true} size={"lg"} alignSelf={"flex-end"} aria-label={''} onClick={showLocalStorage} />
      </Tooltip>

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
