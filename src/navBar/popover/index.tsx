import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Container, MemberList, ListItem, ButtonMembers } from './style';

export const TeamMembersPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Container>
      <ButtonMembers aria-describedby={id} variant="text" onClick={handleClick}>
        Integrantes
      </ButtonMembers>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MemberList>
          <ListItem>Roseane Oliveira (rocg)</ListItem>
          <ListItem>Maike Menezes (mhrm2)</ListItem>
          <ListItem>Luísa Mendes (mlmsp)</ListItem>
          <ListItem>Felipe Souza (frs3)</ListItem>
          <ListItem>Camila Xavier (cxm)</ListItem>
          <ListItem>Breno Cavalcanti (bmmuc)</ListItem>
          <ListItem>Bianca Duarte (bds)</ListItem>
        </MemberList>   
      </Popover>
    </Container>
  );
}