import {QueryErrorResetBoundary, useQuery} from 'react-query';
import Skeleton from '@mui/material/Skeleton';
import DataTable from './DataTable';
import './StarWarsTable.css';

// References: https://react-query.tanstack.com/guides/queries
//             https://mui.com/components/skeleton/
//             https://www.denniskortsch.de/posts/msw-react-testing

function StarWarsTable() {
    const {isLoading, isError, data, error} = useQuery('filmList', () => fetch("https://swapi.dev/api/films/").then((res) => res.json()));

    if(isError) {
        return (<div>Error: {error.message}</div>);
    }

    return (
        <div className='table-container'>
            {isLoading ? (
            <>
                <Skeleton height={50} variant='text' data-testid='skeleton'></Skeleton>
                <Skeleton height={400} variant='rectangular'></Skeleton>
            </>) : <DataTable data={data} data-testid='data-table'/>}
        </div>
        
    );
}

export default StarWarsTable;