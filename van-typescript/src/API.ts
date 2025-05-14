const url = 'https://www.course-api.com/react-tours-project';

async function fetchData(url: string): Promise<any> {
    try {
        const resp: Response = await fetch(url);
        
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error instanceof Error ? `Error: ${error.message}` : 'Unknown error');
        return [];
    }
}

const tours = await fetchData(url);
tours.map((tour) => {
    console.log(tour);
})