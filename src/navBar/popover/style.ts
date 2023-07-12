import styled from 'styled-components';
import Button from '@mui/material/Button';


export const Container = styled.div`
`;

export const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const MemberList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #222021;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`;

export const ButtonMembers = styled(Button)`
    text-decoration: none !important;
    color: #fff !important;
    font-size: 14px !important;
    font-family: 'Inter',sans-serif !important;
    font-weight: 700 !important;
    text-transform: capitalize !important;

    &:hover {
        background-color: transparent !important;
    }
`;