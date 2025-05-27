import { z } from 'zod';

const url = 'https://www.course-api.com/react-tours-project'; 

const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    info: z.string(),
    image: z.string(),
    price: z.string(),
    // rating: z.number().optional().default(0), // Default value for rating if rating is not provided
});

type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
    try {
        const resp: Response = await fetch(url);
        
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const data: Tour[] = await resp.json();
        // Validating data against the schema using zod
        const safeData = z.array(tourSchema).safeParse(data);
        if (!safeData.success) {
            throw new Error(`Validation error: ${safeData.error}`);
        }

        return safeData.data;
    } catch (error) {
        console.log(error instanceof Error ? `Error: ${error.message}` : 'Unknown error');
        return [];
    }
}

const tours: Array<Tour> = await fetchData(url);
tours.map((tour) => {
    console.log(tour);
})