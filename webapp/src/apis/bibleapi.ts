import IReference from "src/models/IReference";

const bibleUrl = "https://api.makmanor.com";
const debugUrl = "https://localhost:44340"

export async function getRandomReferenceAsync(): Promise<IReference> 
{
    const url = bibleUrl + "/bible/random";
    const req = new Request(url, {
        headers: [
            ['Content-Type', 'application/json']
        ],
        credentials: "include",
        method: 'POST',
    })

    const res = await fetch(req);
    if (!res.ok) {
        throw new Error('failed to fetch verse');
    }
    
    return (await res.json()) as IReference;
}