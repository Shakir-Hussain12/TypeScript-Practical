import { z } from 'zod';

const url = 'https://www.course-api.com/react-tours-project'; 

const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    info: z.string(),
    image: z.string(),
    price: z.string(),
    // rating: z.number(),
});

type Tour = z.infer<typeof tourSchema>;

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