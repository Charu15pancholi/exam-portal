import { Divider, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'

function OptionsComponent({options}) {
  return (
    <Grid container item xs={12} gap={"0.5rem"}>
        {/* <Grid item xs={12} sx={{bgcolor: "#fff", p: 1.5}}>
            <Typography variant={"h6"} textAlign={"center"}>Options</Typography>
        </Grid> */}

        <Grid item xs={12} sx={{bgcolor: "#fff", p: 1.5}}>
            <RadioGroup
                name="radio-buttons-group"
            >
            {
                options?.map((e, i) => <>
                    {i !== 0 ? <Divider /> : null}
                    <FormControlLabel sx={{bgcolor: "#fff", p: 1.5}} value={e} control={<Radio />} label={e} /> 
                </>
                // <Grid item container xs={12} >
                //     <Grid item flex={1}>
                //         <Typography variant={"body1"}>{e}</Typography>
                //     </Grid>
                // </Grid>
                )
            }
            </RadioGroup>
        </Grid>
        
    </Grid>
  )
}

export default OptionsComponent