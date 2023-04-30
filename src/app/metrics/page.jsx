export default async function Metrics() {
    const data = await getData();
    return (
        <div className="m-6">
        {data}
        </div>
    );
}
async function getData() {
    const res = await fetch('http://localhost:8080/', {
        next: { revalidate: 10 },
        method: 'GET',
        mode: "cors",
        headers: { 'Content-Type': 'application/json' }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    console.log(data);
    return data;
}