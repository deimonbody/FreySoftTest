import { Stack } from '@mui/material';
import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import userAvatar from '@/assets/images/userAvatar.png';
import { Notification, UserAvatar, PageName } from './styles';

interface IProps {
  pageTitle: string;
}

const Header: React.FC<IProps> = ({ pageTitle }) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
      <UserAvatar>
        <img src={userAvatar} alt="userAvatar" />
      </UserAvatar>
      <PageName>{pageTitle}</PageName>
      <Notification>
        <NotificationsNoneIcon />
      </Notification>
    </Stack>
  );
};

export default Header;
