import React, { use, useEffect, useState } from 'react'
import AuthoritiesLayout from '@/components/layouts/AthoritiesLaout';
import { getValueByKey } from '@/apis';
import { SERVER } from '@/utils/constants';
import { Tab, Table } from 'react-bootstrap';
import Members from '@/components/authorities/Members';

function Syndicate() {

  const [syndicateData, setSyndicateData] = useState([]);

  const getSyndicateData = async () => {
    try {
      const syndicateData = await getValueByKey("AUTHORITIES_SYNDICATE");
      setSyndicateData(JSON.parse(syndicateData.value));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getSyndicateData();
  }, []);

  return (
    <AuthoritiesLayout>
      <div className='mt-24 mb-10'></div>
      {/* syndicateData has four attributes: Name, Role, Status, Image. Show as grid of cards styled with tailwindcss */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {syndicateData.map((syndicate) => (
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-3">
              <img className=' rounded-lg' src={`${SERVER}/file-data-images/${syndicate.Image}`} alt={syndicate.Name} />
              <h3 className=' font-bold text-lg my-1'>{syndicate.Name}</h3>
              <p className=' text-gray-500 font-bold tracking-wider'>{syndicate.Role}</p>
              <p className=' mt-2'>{syndicate.Status}</p>
            </div>
          ))}
        </div>
      </div> */}
      <Members syndicateData={syndicateData} />
    </AuthoritiesLayout >
  )
}

export default Syndicate