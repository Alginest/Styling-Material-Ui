import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  buttonText: (props) => {
    return {
      color: props.cool ? 'blue' : 'red',
      [theme.breakpoints.up('sm')]: {
        color: 'cyan',
      },
      backgroundColor: props.cool ? 'orange' : 'gray',
    }
  },
  buttonBackground: {
    backgroundColor: 'red',
  },
}))
const CoolButton = (props) => {
  const classes = useStyles(props)
  return (
    <Button
      fullWidth
      className={`${classes.buttonBackground} ${classes.buttonText}  `}
    >
      The Butoon
    </Button>
  )
}
export default CoolButton
