import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { AlertColor } from '@mui/material';

type AlertMessageProps = {
  Mensaje: string,
  open: boolean,
  changeIcon: string
}
export default function AlertMessage({ Mensaje, open, changeIcon }: AlertMessageProps) {

  return (
    <div>
      <Snackbar open={open}>
        <Alert
          severity= {changeIcon as AlertColor}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {Mensaje}
        </Alert>
      </Snackbar>
    </div>
  );
}