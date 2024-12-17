import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'

function Input({ label, onChange, value, type }) {
    const [visible, setVisible] = useState(false)
    const sx = { position: "absolute", right: "10px", top: "10px", zIndex: "10" }

    const handleClick = () => setVisible(prev => !prev)

    return (
        <Box width={"100%"} position={"relative"}>
            {
                type === "password" ?
                    visible
                        ? <IconButton sx={sx} onClick={handleClick}>
                            <VisibilityOff />
                        </IconButton>
                        : <IconButton sx={sx} onClick={handleClick}>
                            <Visibility />
                        </IconButton>
                    : null
            }
            <TextField className={"input"} type={type === "password" ? !visible ? "password" : "text" : type} label={label} onChange={onChange} value={value} fullWidth />
        </Box>
    )
}

export default Input