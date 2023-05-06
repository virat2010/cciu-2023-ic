import Truncate from "@/Components/Truncate";

export default function profile() {
  return (
    <div className="p-4 flex">
      <div className="card w-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="avatar obline">
            <img
              src="https://avatars.githubusercontent.com/u/59180983?v=4"
              alt="Virat"
              className="rounded-full"
            />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Virat R. Ponugoti</h2>
          <p>Healthy and Well! A good student.</p>
          <div className="card-actions">
            <a
              href="https://github.com/virat2010"
              role="button"
              className="btn btn-primary"
            >
              Check him out on GitHub!
            </a>
            <Truncate />
          </div>
        </div>
      </div>
    </div>
  );
}