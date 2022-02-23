import {useQuery} from 'react-query';

// References: https://react-query.tanstack.com/guides/queries

function StarWarsTable() {
    const {isLoading, isError, data, error} = useQuery('filmList', () => fetch("https://swapi.dev/api/films/").then((res) => res.json()));

    if(isLoading) {
        console.log('data is loading...');
    }

    if(isError) {
        console.log('error: ' + error.message);
        return (<div>Error</div>);
    }

    return (
        <>
            {isLoading && <div>is loading</div>}
            <div>star wars table</div>
        </>
        
    );
}

export default StarWarsTable;