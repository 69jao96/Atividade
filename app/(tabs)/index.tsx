
import axios from 'axios';
import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import Botao from '../componentes/Botao';
import Click from '../componentes/Click';

interface IUsers {
  name: string
  id: string
  avatar: string
}

export default function HomeScreen() {
const [Users, setUsers] = React.useState<IUsers[]>([])

const GetUsers = async () =>{
  const { data } = await axios.get("https://68474fef7dbda7ee7ab21540.mockapi.io/Alunos")
  setUsers(data)
  console.log(data)
}

const ListUsers = () =>{
   return Users.map(User => {
    return(
      <Botao key={User.id}>
        <Image source={{ uri: User.avatar }} style={{ width: 100, height: 100, borderRadius: 10, marginBottom: 10,}} />
        <Text>ID: {User.id}</Text>
        <Text style={{marginBottom: 10}}>Nome: {User.name}</Text>
        <Button 
          title='Vamos, clique aqui'
        />
      </Botao>
    )
   })
}

React.useEffect(() => {
   GetUsers()
}, [])

  return (
   <ScrollView style={{backgroundColor: 'black'}}>
   <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-around', padding:10}}>
      {ListUsers()}
   </View>
   <View>
      <Click />
   </View>
   </ScrollView>
  );
}