import Link from 'next/link';
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="text-white">
      <h1 className="p-4 text-6xl font-bold text-center my-4">
        Health Portal
        <br />
        <Link className="text-4xl link hover:text-6xl ease-out duration-300 hover:text-rose-500 transition-all text-sky-500" href="/metrics">Go to Metrics</Link>
        </h1>

      <div className="p-8 center center-welcome text-center my-4 border-neutral-400 border-2 stats shadow-2xl shadow-rose-700/50">
        <div className="stat">
          <div className="stat-title text-xl text-white">Chance of Heart Attack</div>

          <div className="stat-value text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#f43f5e"
              viewBox="0 0 24 24"
              className="inline-block animate-ping w-16 h-16 stroke-rose-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#f43f5e"
              viewBox="0 0 24 24"
              className="inline-block ml-[-4rem] w-16 h-16 stroke-rose-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-desc text-white text-lg">This is your risk of heart attack in the near future.
            </div>
          <div
            className="radial-progress bg-base-200 border-primary text-sky-500 font-extrabold text-4xl stat-figure animate-[spin_2s_cubic-bezier(.76,.01,.44,.95)]"
            style={{ "--value": 5, "--thickness": "8px", "--size": "12rem" }}
          >
            <div
              className="animate-[spin_2s_cubic-bezier(.52,1.61,.6,-0.78)] text-sky-500"
              style={{ animationDirection: "reverse" }}
            >
              {(data.risk*0.5).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 center center-welcome ml-[900px] my-4 border-neutral-400 border-2 stats text-xl shadow-2xl shadow-rose-700/50 text-left">
      <ul>
          <li className="text-success">Low risk: less than 5%</li>
      <li className="text-warning">Intermediate risk: 5% to less than 7.5%</li>
          <li className="text-error">High risk: 7.5% or higher</li>
      </ul>
      </div>
      </div>
  );
}
async function getData() {
  const res = await fetch('http://localhost:8080/risk', {
    method: 'GET',
    mode: "cors",
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return await res.json();
}