import React from 'react'
import NavBar from '../components/NavBar'

function FreeTeam() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5  bg-custom-radial">
      <NavBar/>
      
      <div className="stats stats-vertical lg:stats-horizontal">  
        <div className="stat">
          <div className="stat-title">Start Time</div>
          <div className="stat-value text-2xl">13/4/2024</div>
        </div>
        <div className="stat">
          <div className="stat-title">End Time</div>
          <div className="stat-value text-2xl">13/10/2024</div>
        </div>
        <div className="stat">
          <div className="stat-title">Period</div>
          <div className="stat-value text-2xl">5 months</div>
        </div>
        <div className="stat">
          <div className="stat-title">Step</div>
          <div className="stat-value text-2xl">1</div>
        </div>
        <div className="stat">
          <div className="stat-title">Penalty</div>
          <div className="stat-value text-2xl">-5%</div>          
        </div>
        <div className="stat">
          <div className="stat-title">B.free Boost</div>
          <div className="stat-value text-2xl">+100%</div>          
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
                    <th>Fund</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className="text-lg hover:bg-button-color">
                    <td>Sofia Villanueva</td>
                    <td>0x3F4E...D26</td>
                    <td>82</td>
                    <td>$1,000.00</td>
                </tr>
                {/* row 2 */}
                <tr className="text-lg hover:bg-button-color">                    
                    <td>Daniela Ibarra</td>
                    <td>0xBcD...5C3</td>
                    <td>95</td>
                    <td>$1,000.00</td>
                </tr>
                {/* row 3 */}
                <tr className="text-lg hover:bg-button-color">
                    <td>Mariana Salgado</td>
                    <td>0x1aA...93B</td>
                    <td>97</td>
                    <td>$1,000.00</td>
                </tr>
                {/* row 4 */}
                <tr className="text-lg hover:bg-button-color">
                    <td>Alejandra Osorio</td>
                    <td>0x0De...4AF</td>
                    <td>97</td>
                    <td>$1,000.00</td>
                </tr>
                {/* row 5 */}
                <tr className="text-lg hover:bg-button-color">
                    <td>Carolina Arredondo</td>
                    <td>0x9eE...6bB</td>
                    <td>97</td>
                    <td>$1,000.00</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="m-10 flex flex-row gap-4">
            <button type="submit" className="w-full bg-button-color text-white rounded-2xl p-2">
            Add tandaFree Member
            </button>
            <button type="submit" className="w-full bg-button-color text-white rounded-2xl p-2">
            Start tandaFree
            </button>
      </div>
    </div>
  )
}

export default FreeTeam