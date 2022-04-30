import React from 'react'

import HighlightCard from '../../components/HighlightCard'
import TransactionCard, {
  TransactionCardProps
} from '../../components/TransactionCard'

import {
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string
}

export default function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/04/2022',
      type: 'up'
    },
    {
      id: '2',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      category: { name: 'Alimentação', icon: 'coffee' },
      date: '10/04/2022',
      type: 'down'
    },
    {
      id: '3',
      title: 'Aluguel',
      amount: 'R$ 1300,00',
      category: { name: 'Despesas', icon: 'home' },
      date: '10/04/2022',
      type: 'down'
    }
  ]

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/96435473?v=4'
              }}
            />

            <User>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Raven</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserContainer>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}
