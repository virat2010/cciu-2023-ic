import Chart from "@/Components/Chart"

export default async function Metrics({ dat }) {
    const data = await getData();
    return (
        <div className="m-6">
        <Chart data={data} />
        <Chart data={dat} />
        </div>
    );
}
async function getData() {
    const res = await fetch('http://localhost:8080/', {
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

export async function getStaticProps() {
    const res = await fetch('http://localhost:8080/', {
        method: 'GET',
        mode: "cors",
        headers: { 'Content-Type': 'application/json' }
    });
  const dat = await res.json()

  return {
    props: {
      dat,
    },
    revalidate: 10,
  }
}