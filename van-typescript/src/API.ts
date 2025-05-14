const url = 'https://www.course-api.com/react-tours-project';

interface Tour {
    id: string;
    name: string;
    info: string;
    image: string;
    price: number;
}

async function fetchData(url: string): Promise<Tour[]> {
    try {
        const resp: Response = await fetch(url);
        
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const data: Tour[] = await resp.json();
        return data;
    } catch (error) {
        console.log(error instanceof Error ? `Error: ${error.message}` : 'Unknown error');
        return [];
    }
}

const tours: Array<Tour> = await fetchData(url);
tours.map((tour) => {
    console.log(tour);
})