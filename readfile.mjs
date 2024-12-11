export async function readFile(fileName) {
    try {
        const stream = await fetch(fileName);
        const fileContent = await stream.json();
        return fileContent;
    } catch (error) {
        console.error(error);
    }
}