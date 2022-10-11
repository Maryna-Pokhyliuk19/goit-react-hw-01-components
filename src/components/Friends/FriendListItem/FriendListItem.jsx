import PropTypes from 'prop-types';
import { FriendName, FriendListItemEl, FriendStatus } from './FriendListItem.styled';


export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendListItemEl key={id}>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <img src={avatar} alt={name} width="48" />
      <FriendName >{name}</FriendName>
</FriendListItemEl>);
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}