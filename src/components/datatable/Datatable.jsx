import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatableSource';

function Datatable() {

    const actionColumn = [{
        field:'actioin',
        headerName: 'Action',
        width:200,
        renderCell:()=>{
           return <div className="cellAction">
                <div className="viewButton">View</div>
                <div className="deleteButton">Delete</div>
            </div>
        }
    }]
   
    return (
        <div className='datatable'>
            
                <DataGrid
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        
    )
}

export default Datatable
