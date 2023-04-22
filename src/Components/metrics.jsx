export default function Metrics({ data }) {
    const loading = !data;
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>Mean: {data[0].mean}</p>
                    <p>Median: {data[0].median}</p>
                    <p>Mode: {data[0].mode}</p>
                </div>
            )}
        </div>
    );
}

async function getData() {
    const res = await fetch('http://localhost:8080');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data;
}

async function getServerSideProps() {
    const data = await getData();
    return {
        props: { data }
    };
}

/*async function getData() {
  const res = await fetch('http://localhost:8080');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export default async function Metrics() {
    const data = await getData();
    return (
        <div>
            <Da promise={data} />
        </div>
    );
}
async function Da({ promise }) {
    const data = await promise;
     return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>Mean: {data[0].mean}</p>
                    <p>Median: {data[0].median}</p>
                    <p>Mode: {data[0].mode}</p>
                </div>
             )}
        </div>
    );
}*/