import css from './FriendList.module.css'
import { FriendListItem } from "../FriendListItem/FriendListItem"
import PropTypes from 'prop-types';

export const FriendList = ({ friendlist }) => {
    return (
        <ul className={css.friendList}>
            {friendlist.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
            ))}
    </ul>)
}

FriendList.propTypes = {
    friendlist: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    }))
}