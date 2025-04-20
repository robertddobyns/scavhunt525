import React, {useState} from 'react'
import { Checkbox, styled } from '@mui/material'

export default function GameItem(props) {
    const {item} = props
    const [checked, setChecked] = useState(false)

    const handleCheckboxChange = () => {
        setChecked(!checked)
        props.handleCheckboxChange(!checked)
    }

  return (
    <Main key={item.id} >
        <Checkbox 
            value={checked}
            onChange={handleCheckboxChange}
        />
        <p>{item.description}</p>
    </Main>
  )
}

const Main = styled('div')(({theme}) => ({
    display: 'flex',
    backgroundColor: 'white',
    border: '2px solid var(--green)',
    gap: theme.spacing(2),
    margin: theme.spacing(2),
    zIndex: 2
}))