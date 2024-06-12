import PageBanner from '@/components/PageBanner'
import HeaderFooter from '@/components/global/HeaderFooter'
import React, { useEffect } from 'react'
import faculty from '../events'
import axios from 'axios'
import { SERVER } from '@/utils/constants'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'
import President from '@/components/about/leadership/President'

function Feculty({
  bannerData,
  departmentsData,
  deanData
}) {

  useEffect(() => {
    console.log('departmentsData: ', departmentsData);
  }, [departmentsData])

  return (
    <>
      <PageBanner {...bannerData} />
      <div className='mt-64'></div>
      {/* here we have to show the employee data */}
      {deanData ? (
        <President
          name={deanData.FirstName + " " + deanData.LastName}
          bio={deanData.Biography}
          email={deanData?.Email}
          officeExtension={deanData?.OfficeExtension}
          faculty={deanData?.Faculty}
          image={`${SERVER}/employee-images/${deanData.Image}`}
        />
      ) : (
        <div className='text-center text-2xl font-bold text-red-500'>Dean Not Selected Yet</div>
      )}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col">
          <div>
            <h2 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-5'>
              Departments
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {departmentsData.map((department, index) => {
                return (
                  // redirect to /leadership/department.Id-department.Name
                  // on click of this card
                  <Link href={`/leadership/${department.Id}-${department.Name}`} key={index}>
                    <div key={index}
                      // add mask
                      className=" bg-black rounded-lg shadow-lg py-10 relative"
                      style={{
                        backgroundImage: `url(${SERVER}/department-images/${department.Logo})`, backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-black z-0 opacity-50 rounded-lg"></div>
                      <h2 className="text-3xl text-white relative text-center z-10 font-bold">{department.Name}</h2>
                      {/* <p>{department.description}</p> */}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feculty

export async function getServerSideProps(context) {
  const { feculty } = context.query

  let bannerData = {};
  let departmentsData = [];
  let deanData = {};

  const getDepartmentsByFaculty = async (faculty) => {
    try {
      const { data } = await axios.get(`${SERVER}/department/faculty/${faculty}`)
      console.log('data: ', data);
      departmentsData = data;
    }
    catch (error) {
      console.log(error);
    }
  }

  const getDeanData = async (faculty) => {
    try {
      const { data } = await axios.get(`${SERVER}/employee/faculty-dean/${faculty}`)
      console.log('dean: ', data);
      deanData = data;
    }
    catch (error) {
      console.log(error);
    }
  }
  await getDepartmentsByFaculty(feculty);
  await getDeanData(feculty);

  // conert to sentence case
  bannerData.title = feculty.replace(/-/g, ' ').replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
  // bannerData.description = "Feculty Description";

  return {
    props: {
      bannerData,
      departmentsData,
      deanData
    },
  }
}