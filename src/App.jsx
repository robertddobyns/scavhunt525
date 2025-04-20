import {Button, styled, TextField} from '@mui/material'
import {useState} from 'react'
import './App.css'
import Game from './Game'

function App() {
  
  const [gameCode, setGameCode] = useState('')
  const [gameStateModal, setGameStateModal] = useState(false)
  const [gameState, setGameState] = useState(1)

  const handleModal = () => {
    setGameStateModal(true)
  }

  const handleGameState = () => {
    setGameState(2)
  }

  const handleSearch = () => {
    setGameState(2)
  }

  return (
    <>
    {gameState === 1 && 
      <div
        style={{
          height: '85vh',
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem',
        }}
      >
        <TitleContainer>
          <h1>Scavenger Hunt</h1>
          <h2>
            Spring 2025!
          </h2>
        </TitleContainer>
        <StyledButtonContainer>
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleGameState}
          >
            New Game
          </Button>
          <Button 
            variant="outlined" 
            color="secondary"
            onClick={handleModal}
          >
              I have a game code
          </Button>
          {gameStateModal && (
            <StyledCodeContainer> 
              <TextField
                label="Enter Game Code"
                variant="outlined"
                value={gameCode}
                onChange={(e) => setGameCode(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={handleSearch}>
                Submit
              </Button>
            </StyledCodeContainer>
          )}
        </StyledButtonContainer>
      </div>
    } 
    {gameState === 2 && 
      <Game 
        gameCode={gameCode}
      />
    }
    </>
  )
}

const StyledButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
}))

const TitleContainer = styled('div')(({ theme }) => ({
  position: 'relative',
}))

const StyledCodeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  border: '3px solid var(--green)',
  padding: theme.spacing(2),
  backgroundColor: 'var(--pink2)'
}))

export default App
