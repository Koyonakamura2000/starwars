// References: https://mui.com/components/tables/

function DataTable(props) {
    let moviesInfo = [];
    let results = props.data.results;
    for(let i = 0; i < results.length; i++) {
        moviesInfo.push(createData(results[i]['title'], results[i]['episode_id'], results[i]['release-date'], results[i]['director']));
    }
    console.log(moviesInfo);
    return (
        <div>data table</div>
    );
}

// creates dictionary with keys 'title', 'episode_id', 'release_date', 'director' associated with each param value
function createData(title, episode_id, release_date, director) {
    return { title, episode_id, release_date, director };
}

export default DataTable;