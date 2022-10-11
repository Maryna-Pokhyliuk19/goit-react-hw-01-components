import styled from "styled-components";

export const FriendListItemEl = styled.li`
display: flex;
    align-items: center;
    padding: 8px;
    width: ${p => p.theme.sizes.friendListItemWidth};
    margin-bottom: 8px;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px, rgb(0 0 0 / 6%) 0px 4px 4px, rgb(0 0 0 / 16%) 1px 4px 6px;
    border-radius: 4px;
`
export const FriendName = styled.p`
    font-weight: 700;
    margin-left: 10px;
    
`
export const FriendStatus = styled.span`
    width: 10px;
height: 10px;
border-radius: ${p => p.theme.radii.round};
margin-right: ${p => p.theme.space[2]}px;
background-color: ${p => {
    return p.isOnline ? p.theme.colors.isOnline : p.theme.colors.isOffline
}};
`