import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TableContainerCustom } from '../../../components';
import HeaderCategory from '../../../components/HeaderCategory/HeaderCategory';

function Orders() {
    return (
        <Box
            sx={{
                flexGrow: 1,
            }}
        >
            <HeaderCategory header={{ CATEGORY: "Page", TITLE: "Orders" }} />
            <TableContainerCustom />
        </Box>
    )
}

export default Orders