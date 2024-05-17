import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 24px;
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
`
export const TodoControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const NewTodo = styled.div`
  display: flex;
  gap: 8px;
`
export const ControlBtn = styled.div`
  display: flex;
  gap: 8px;
`

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const TodoHeader = styled.span`
  font-size: 32px;
  color: teal;
  font-weight: 700;
`