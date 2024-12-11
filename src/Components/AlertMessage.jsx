import Alert from '@mui/material/Alert';

export default function AlertMessage({ children, value , onClosed, severity}) {
    return (<>
        {value &&
        <Alert variant="filled" severity={severity} onClose={onClosed}>
            {children}
        </Alert>}
        </>
    );
}
