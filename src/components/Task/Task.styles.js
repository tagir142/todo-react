import styled from 'styled-components'

export const TaskWrapper = styled.div`
  background-color: darkseagreen;
  padding: 2px 2px 2px 2px;
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1%;
  word-wrap: break-word;
  border-radius: 5px;
  align-items: center;
  
`
export const TaskText = styled.label`
  text-align: center;
  padding-left: 4px;
  background-color: white;
  width: 70%;
  font-size: 22px;
  text-decoration: ${props => props.id};
  border-radius: inherit;
  
  
  
    
`
export const TaskDate = styled.label`
width:15% ;

`
export const TaskDelete = styled.button`
width: 12%;
  
`
export const TaskChecked = styled.input`
   width: 3%;
  
`
