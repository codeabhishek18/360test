'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() 
{

  const [ data, setData ] = useState(null);
  const [ courses, setCourses ] = useState(null);
  const [ loading, setLoading ] = useState(true);

	useEffect(()=>
	{
    getTransactions();
		
	},[])

  const getTransactions = async () =>
  {
    try
    {
      const url = '/api/course'
      const response = await axios.get(url);
      setCourses(response.data)
    }
    catch(error)
    {
      console.log(error)
    }
    finally
    {
      setLoading(false);
    }
  }

  console.log(courses)

  if(loading)
    return

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/web" className='h-64 cursor-pointer flex items-center justify-center bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300'>
          <h2 className="text-xl font-medium">Web search</h2>
        </Link>
        <Link href="/accounts" className='h-64 cursor-pointer flex items-center justify-center bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300'>
          <h2 className="text-xl font-medium">Accounts</h2>
        </Link>
        {/* <Link href="/transactions" className='h-64 cursor-pointer flex items-center justify-center bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300'>
          <h2 className="text-xl font-medium">Transactions</h2>
        </Link> */}
        <Link href="" className='h-64 cursor-pointer flex items-center justify-center bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300'>
          <h2 className="text-xl font-medium">Transactions</h2>
        </Link>
        <Link href="/screen" className='h-64 cursor-pointer flex items-center justify-center bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-300'>
          <h2 className="text-xl font-medium">Screen</h2>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {data && <div className="grid gap-4">
      </div>}

      <div className="flex flex-wrap gap-4">
        {courses.map((course)=>
        (
          <p key={course._id} className="font-bold text-xl">{course.title}</p>
        ))}
      </div>
        
      </div>
      
    </div>
  );
}
