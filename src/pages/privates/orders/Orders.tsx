import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TableContainerCustom } from '../../../components';
import HeaderCategory from '../../../components/HeaderCategory/HeaderCategory';
{/*import DataGridCustom from '../../../components/Tables/DataGrid/DataGridCustom';
import DataTableNetCustom from '../../../components/Tables/DataTableNet/DataTableNetCustom';*/}

function Orders() {
    return (
        <Box
            sx={{
                flexGrow: 1,
            }}
        >
            <HeaderCategory header={{ CATEGORY: "Page", TITLE: "Orders" }} />
            
            <TableContainerCustom />
            {/*<DataTableNetCustom/>*/}
            {/*<TableContainerCustom />*/}
            {/*<MaterialTableCustom/>*/}
            {/*<DataGridCustom/>*/}
        </Box>
    )
}

export default Orders