import styled from 'styled-components'

export const TaskWrapper = styled.form`
  background-color: darkseagreen;
  padding: 2px 2px 2px 2px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const TaskText = styled.label`
  text-align: center;
  padding-left: 4px;
  background-color: white;
  width: 100%;
  font-size: 22px;
  text-decoration: ${props => props.id};
  
    
`

export const TaskChecked = styled.input`
      
`
