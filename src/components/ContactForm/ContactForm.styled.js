import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  font-weight: 600;
  gap: 20px;
  margin-bottom: 40px;
`;

export const FormLabel = styled.label`
  padding: 10px;
  padding-left: 0;
  text-transform: uppercase;
`;

export const FormInput = styled.input`
  margin-left: 10px;
  height: inherit;
  border: 0;
  border-bottom: 2px solid violet;
  color: blueviolet;
`;

export const AddContactBtn = styled.button`
  cursor: pointer;
  width: 170px;
  border: 0;
  border-radius: 15px;
  background-color: violet;
  color: white;
  transition: 300ms;

  &:hover {
    background-color: blueviolet;
    transform: scale(1.05);
  }
`;
