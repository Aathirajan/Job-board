import React from 'react';


const Navbar = () => {

  // const [nav, setNav] = useState(false)

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





  return (
    <div className=" flex justify-between items-center h-16 pl-5 w-full text-white bg-[#000000] ">
      <p className="text-2xl mr-5">Freshers Hut</p>
      <div >
        <ul className="hidden md:flex justify-between items-center ">
         {details.map( ({id, name})=>(
         <li key={id} className=" font-bold italic">
          <div className="m-5" >{name}</div>
         </li>
         ))}
         </ul>
         
         
      </div>





    </div>
  )
}

export default Navbar