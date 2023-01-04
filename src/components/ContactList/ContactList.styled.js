import styled from 'styled-components';
import { AddContactBtn } from 'components/ContactForm/ContactForm.styled';

export const ListContacts = styled.ul`
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ListContactsItem = styled.li`
  width: 300px;
  padding: 15px 25px;
  border: 2px solid #7a5770;
  border-radius: 14px;
  color: #a17293;
`;

export const DeleteBtn = styled(AddContactBtn)`
  width: 80px;
  height: 30px;
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: #7a5770;
`;
