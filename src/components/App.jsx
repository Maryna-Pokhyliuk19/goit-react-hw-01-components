import css from './App.module.css';
import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/StatisticsList/Statistics';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { FriendList } from './Friends/FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className={css.content}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" statistic={data} />
      <FriendList friendlist={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
