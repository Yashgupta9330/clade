export default function Options(){
    return(
        <div className="hidden sm:block w-full px-[55px] md:px-[80px] lg:pl-[100px] mt-4">
        <div className='h-8 md:h-12 lg:h-16 xl:h-10'>
            <div className='flex items-center justify-start w-full h-[100%]' >
            <ul className="list-none flex  text-[20px] leading-[27px] gap-12">
              <li className="text-[#DC4A2D] font-semibold">Job preview</li>
              <li className="text-[#888888] font-medium">Applicants</li>
              <li className="text-[#888888] font-medium">Match</li>
              <li className="text-[#888888] font-medium">Messages</li>
            </ul>
            </div>
        </div>
        <div className="w-[65px] ml-[25px] border-t-[2px] border-[#DC4A2D]  mt-2 mb-2 font-semibold"></div>
        <hr/>
       </div>
    )
}