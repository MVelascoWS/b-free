import React from 'react'
import NavBar from '../components/NavBar'

function CoreTeam() {
  return (
    <div className="flex min-h-screen flex-col  items-center justify-between p-5  bg-custom-radial">
      <NavBar/>     
      <div className="stats stats-vertical lg:stats-horizontal">  
        <div className="stat">
          <div className="stat-title">tandaFree</div>
          <div className="stat-value text-2xl">4</div>
        </div>
        <div className="stat">
          <div className="stat-title">Projects Funded</div>
          <div className="stat-value text-2xl">4</div>
        </div>
        <div className="stat">
          <div className="stat-title">Bfree members</div>
          <div className="stat-value text-2xl">20</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Avaliable</div>
          <div className="stat-value text-2xl">$500,000.00</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Funded</div>
          <div className="stat-value text-2xl">$150,000.00</div>          
        </div>
      </div>
      <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr className="text-tag-color text-base">
                    <th>Name</th>
                    <th>Address</th>
                    <th>Credibility</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className="text-lg hover:bg-button-color">
                    <td>Julieta Milanesio</td>
                    <td>0x75d...000</td>
                    <td>100</td>
                </tr>
                {/* row 2 */}
                <tr className="text-lg hover:bg-button-color">                    
                    <td>Elba Chavez</td>
                    <td>0xab3...000</td>
                    <td>100</td>
                </tr>
                {/* row 3 */}
                <tr className="text-lg hover:bg-button-color">
                    <td>Sury Bonfil</td>
                    <td>0xcd4...000</td>
                    <td>100</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="m-10 flex flex-row gap-4">
            <button type="submit" className="w-full bg-button-color text-white rounded-2xl p-2">
            Add Core Member
            </button>
            <button type="submit" className="w-full bg-button-color text-white rounded-2xl p-2">
            Create tandaFree
            </button>
      </div> 
        
    </div>
    
  )
}

export default CoreTeam