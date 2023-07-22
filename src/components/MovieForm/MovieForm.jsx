import React from 'react'
import { TextField,Button} from "@mui/material";
const MovieForm = () => {
  return (
    <form>
      <h2>Add a Movie</h2>
      <TextField id="outlined-basic" label="Movie title" variant="outlined" />
      <TextField id="outlined-basic" label="Movie image" variant="outlined" />
      <TextField id="outlined-basic" label="Movie description" variant="outlined" />
      <Button variant="contained" >Add Movie</Button>
    </form>
  )
}

export default MovieForm