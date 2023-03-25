import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai'


const Navbar = () => {

  const [nav, setNav] = useState(false)

  let details = [
    {
      id: '1',
      name: 'Home'
    },
    {
      id: '2',
      name: 'Batch'
    },
    {
      id: '3',
      name: 'Location'
    },
    {
      id: '4',
      name: 'Internships'
    },
    {
      id: '5',
      name: 'Contact Us'
    }
  ]





  return (<div>
    <div className=" flex justify-between items-center h-16 pl-5 w-full text-white bg-[#000000] ">
      <p className="text-2xl mr-5">Freshers Hut</p>
      <div >
        <ul className="hidden md:flex justify-between items-center ">
          {details.map(({ id, name }) => (
            <li key={id} className=" font-bold italic">
              <div className="m-5 hover:text-bg-sky-700 to-yellow-400 cursor-pointer ">{name}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="pr-4 cursor-pointer md:hidden text-gray-500" onClick={() => setNav(!nav)}>
        {(nav ? <AiOutlineCloseCircle size={30} /> : <GiHamburgerMenu size={30} />)}
      </div>
      </div>
     
      {
    nav && <div className="flex flex-col md:hidden h-full w-full ">
      <ul>
        {details.map(({ id, name }) => (
          <li key={id} className="font-bold italic m-12">{name}</li>
        ))


        } </ul>
    </div>
  }


    

</div>
  )
}

export default Navbar