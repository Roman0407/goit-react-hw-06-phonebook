import { Profile } from './profile/Profile';
import user from './profile/user.json';

import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container.styled';

import { Statistics } from './statistics/Statistics';
import statistics from './statistics/data.json';

import { ProfileFriends } from './friendList/FriendList'
import friends from './friendList/friends.json';


import { ProfileTransactionHistory } from './transactionHistory/TransactionHistory'
import transactions from './transactionHistory/transactions.json';

const { username, tag, location, avatar, stats, } = user;
export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />;
      <Statistics title='Upload stats' stats={statistics} />;
      <ProfileFriends friends={friends} />;
      <ProfileTransactionHistory items={transactions} />;
    </Container>
  );
};




