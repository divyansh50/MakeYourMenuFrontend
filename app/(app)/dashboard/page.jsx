import "./dashboard.css"
export default function Home() {
    return (
      <div>
       <div className='main-dashboard'>
        <div className="dashboard-cards flex flex-row p-5 justify-between self-center">
          <div className="flex flex-col self-center m-5">
            <div className="card-text">Pending Orders</div>
            <div className="font-medium card-number">1</div>
          </div>
          <div className="flex self-center m-5">Icon</div>
        </div>
        <div className="dashboard-cards flex flex-row p-5 justify-between self-center">
          <div className="flex flex-col self-center m-5">
            <div className="card-text">Total Scans</div>
            <div className="font-medium card-number">1</div>
          </div>
          <div className="flex self-center m-5">Icon</div>
        </div>
        <div className="dashboard-cards flex flex-row p-5 justify-between self-center">
          <div className="flex flex-col self-center m-5">
            <div className="card-text">Menus</div>
            <div className="font-medium card-number">1</div>
          </div>
          <div className="flex self-center m-5">Icon</div>
        </div>
       </div>
      </div>
    );
}