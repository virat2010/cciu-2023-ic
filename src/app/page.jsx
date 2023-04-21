//import { Metrics } from "@/Components/metrics"

export default function Home() {
  return (
    <div>
      <h1 className="p-4 text-6xl font-bold text-center my-4">Welcome to your portal!</h1>
        <div className="p-8 center center-welcome text-center border-neutral-400 border-2 stats shadow-2xl shadow-rose-700/50">
          <div className="stat">
            <div className="stat-title text-xl">Chance of Heart Attack</div>

            <div className="stat-value text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#f43f5e" viewBox="0 0 24 24" className="inline-block animate-ping w-16 h-16 stroke-rose-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#f43f5e" viewBox="0 0 24 24" className="inline-block ml-[-4rem] w-16 h-16 stroke-rose-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-desc">7% less than last month</div>
            <div className="radial-progress bg-base-200 border-primary text-lime-500 dark:text-primary-content font-extrabold text-4xl stat-figure animate-[spin_2s_cubic-bezier(.76,.01,.44,.95)]" style={{ "--value": 5, "--thickness": "8px", "--size": "12rem" }}>
              <div className="animate-[spin_2s_cubic-bezier(.52,1.61,.6,-0.78)]" style={{ 'animationDirection': 'reverse' }}>5%</div>
            </div>
          </div>
        </div>{/**<br/><br/><Metrics></Metrics>*/}
    </div>
  )
}