import IReference from "src/models/IReference";
import { RandomRefReq } from "./randomRefReq";

const bibleUrl = "https://api.makmanor.com";
const debugUrl = "https://localhost:44340"

export async function getRandomReferenceAsync(version: string, testament: string): Promise<IReference> 
{
    const body: RandomRefReq = {
        version: version,
        testament: testament,
    }
    const url = bibleUrl + "/bible/random";
    const req = new Request(url, {
        headers: [
            ['Content-Type', 'application/json']
        ],
        credentials: "include",
        method: 'POST',
        body: JSON.stringify(body),
    })

    const res = await fetch(req);
    if (!res.ok) {
        throw new Error('failed to fetch verse');
    }
    
    return (await res.json()) as IReference;
}