import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
export default function(){
    return <div>
    <Button  variant="contained"  >Click me</Button>
    <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Alert severity="error">This is an error Alert.</Alert>
    </div>
}