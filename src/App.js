import React from 'react'
import { CssBaseline, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CoolButton from './CoolButton'
const useStyles = makeStyles({
  buttonStyle: {
    color: 'red',
  },
  greenText: {
    color: 'green',
  },
})

const App = () => {
  const classes = useStyles()
  const cool = false
  return (
    <>
      <CssBaseline />
      <CoolButton cool={cool} />
    </>
  )
}

export default App
