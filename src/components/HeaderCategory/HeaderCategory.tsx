import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { HeaderCategorys } from '../../models';



interface Props {
    header: HeaderCategorys;
}

function HeaderCategory({ header }: Props) {
    return (
        <Box
            sx={{
                flexGrow: 1,
                pb: 4
            }}
        >
            <Typography variant="h6" noWrap component="div">
                {header.CATEGORY}
            </Typography>
            <Typography variant="h4" noWrap component="div">
                {header.TITLE}
            </Typography>
        </Box>
    )
}

export default HeaderCategory