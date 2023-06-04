import Chart from "@/Components/Chart"

export default async function Metrics() {
    const data = await getData();
    return (
        <div className="m-6">
            <Chart key={data} dat={data} />
        </div>
    );
}
async function getData() {
    const res = await fetch('http://localhost:8080/', {
        method: 'GET',
        mode: "cors",
        next: { revalidate: 1 },
        cache: 'no-store',
        headers: { 'Content-Type': 'application/json' }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return await res.json();
}