import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// References: https://mui.com/components/tables/

function DataTable(props) {
    let moviesInfo = [];
    let results = props.data.results;
    for(let i = 0; i < results.length; i++) {
        moviesInfo.push(createData(results[i]['title'], results[i]['episode_id'], results[i]['release_date'], results[i]['director']));
    }
    console.log(moviesInfo);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Episode ID</TableCell>
                    <TableCell align="right">Release Date</TableCell>
                    <TableCell align="right">Director</TableCell>
                </TableHead>
                <TableBody>
                    {moviesInfo.map((movie) => (
                        <TableRow key={movie.title}>
                            <TableCell>{movie.title}</TableCell>
                            <TableCell align='right'>{movie.episode_id}</TableCell>
                            <TableCell align='right'>{movie.release_date}</TableCell>
                            <TableCell align='right'>{movie.director}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// creates dictionary with keys 'title', 'episode_id', 'release_date', 'director' associated with each param value
function createData(title, episode_id, release_date, director) {
    return { title, episode_id, release_date, director };
}

export default DataTable;