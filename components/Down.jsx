import { Info, company, data } from "@/assets/Constant";
import Image from "next/image";

export default function Down() {
    return (
        <div className='w-full flex flex-col justify-between lg:flex-row h-[80vh]'>
            <div className='w-full lg:w-[75%] pl-[35px] md:pl-[80px] lg:pl-[100px] pt-[40px]'>
                <div>
                    <div className='flex  w-full  justify-start flex-col sm:flex-row items-center gap-2 md:gap-6 lg:gap-6 xl:gap-10'>
                        <p className="text-[35px] gap-5 flex justify-start sm:justify-center w-full sm:w-auto  font-semibold mb-2 text-[#3D3D3D]"><span>{data.Position}</span></p>
                        <div className="flex  items-center w-full justify-start sm:w-auto sm:justify-center gap-2 md:gap-6 lg:gap-6 xl:gap-10">
                        <p className='font medium text-[14px] text-[#888888] leading-[18.9px]'>posted 2 days ago</p>
                        <div className='flex items-center justify-center gap-1 px-2 py-1 text-xs font-medium border rounded-full border-dotted-custom bg-custom-success'><div className="circle bg-custom"></div><span>{data.IsOpen}</span></div>
                    </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-10 mt-4 mb-16 text-[#5D5D5D] font-medium text-[20px] leading-[27px]'>
                        <p className='flex gap-2'> <Image src="/location.png" width={24} height={24} />{data.Location}</p>
                        <p className='flex gap-2 '> <Image src="/coins-stacked-03.png" width={24} height={24} />{data.Salary}</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-8  lg:gap-12 xl:gap-24' >
                    <div className='flex flex-col font-medium gap-1' >
                        <p className="text-[14px] leading-[19px] text-[#6E6D6D]">Skills Required</p>
                        <div className="flex flex-col text-[12px] leading-[16px] text-custom-secondary">
                            <div className="flex gap-2 mt-1 mb-1 max-w-max border-custom-primary rounded-lg px-[6px] py-[4px] items-center">
                                <Image src="/image-1.png" width={16} height={16} />
                                <span>Figma</span>
                            </div>
                            <div className="flex gap-2 mb-1 max-w-max border-custom-primary rounded-lg px-[6px] py-[4px] items-center">
                                <Image src="/adobe.png" width={16} height={16} />
                                <span>Adobe Illustrator</span>
                            </div>
                            <div className="flex gap-2 mb-1 max-w-max border-custom-primary rounded-lg px-[6px] py-[4px] items-center">
                                <Image src="/xd.png" width={16} height={16} />
                                <span>Adobe XD</span>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className="text-[14px] leading-[19px] text-[#6E6D6D] font-medium">Preferred Language</p>
                        <p className="font-semibold">{data.Language}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className="text-[14px] leading-[19px] text-[#6E6D6D] font-medium">Type</p>
                        <p className="font-semibold">{data.Type}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className="text-[14px] leading-[19px] text-[#6E6D6D] font-medium">Years Of Experience</p>
                        <p className="font-semibold"> {data.Yoe}</p>
                    </div>
                </div>

                <div className="p-1 mt-16">
                    <h3 className="text-[14px] leading-[19px] text-[#6E6D6D] font-medium">About the Job:</h3>
                    <ul className="list-disc pl-6 mt-2 font-medium text-[16px] leading-[28px] text-[#3D3D3D]">
                        {data.AboutJob.map((item, index) => (
                            <li className='list-decimal' key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <h3>Benefits:</h3>
                <ul className="list-disc pl-6 mt-2 mb-2">
                    {data.Benefits.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>Schedule :
                 <br />
                 <ul className="list-disc pl-6 mt-2 mb-2">
                    <li>{data.Schedule}</li>
                 </ul>
                </p>
                <h3 >Supplementary Pay Types:</h3>
                <ul className="list-disc pl-6 mt-2 mb-2">
                    {data.SupplementaryPayTypes.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>Work Location : {data.WorkLocation}</p>

                <div className=' w-[90%] md:w-[80%] mt-16'>
                    <div className='flex gap-5'>
                        <Image src="/CompanyLogo.png" width={40} height={40} />
                        <p className='mt-2 text-[#4F4F4F] font-semibold text-[20px]'>{company.Name} </p>
                    </div>
                    <div className='flex justify-between mt-7'>
                        <div className="flex flex-col w-2/5 gap-1">
                            <p className="text-[14px] leading-[19px] text-[#6E6D6D] font-medium">Company size</p>
                            <p className="font-medium">{company.CompanySize}</p>
                        </div>
                        <div className="flex flex-col w-2/5  gap-1">
                            <p className="text-[14px] leading-[19px] text-[#6E6D6D] font-medium">Type</p>
                            <p className="font-medium">{company.Type}</p>
                        </div>
                    </div>
                    <div className='flex justify-between  mt-7'>
                        <div className="flex flex-col w-2/5  gap-1">
                            <p className="text-[14px] leading-[19px] text-[#6E6D6D] font-medium">Sector</p>
                            <p className="font-medium">{company.Sector}</p>
                        </div>
                        <div className="flex flex-col w-2/5  gap-1">
                            <p className='text-[14px] leading-[19px] text-[#6E6D6D] font-medium text-left'>Funding</p>
                            <p className="font-medium">{company.Funding}</p>
                        </div>
                    </div>
                    <div className='flex justify-between  mt-7'>
                        <div className="flex flex-col w-2/5  gap-1">
                            <p className="text-[14px] leading-[19px] text-[#6E6D6D] font-medium">Founded In</p>
                            <p className="font-medium">{company.FoundedIn}</p>
                        </div>
                        <div className="flex flex-col w-2/5  gap-1">
                            <h1 className='text-[14px] leading-[19px] text-[#6E6D6D] font-medium'>Founded By</h1>
                            <p className="font-medium">{company.FoundedBy}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col sm:justify-start lg:w-[27%] xl:w-[390px] py-10 mt-4 pl-[10px] sm:px-[100px] lg:px-0 xl:px-[24px]'>
                <div className="w-[300px] sm:w-[360px] lg:w-[97%] flex justify-between">
                    <button className="flex items-center text-[#DC4A2D] rounded-xl px-4 sm:px-8 lg:px-4 xl:px-8 py-3 border-[1px] hover:bg-gray-500 border-[#DC4A2D]">
                        <Image src="/trash-03.png" alt="Delete" className="w-4 h-4 mr-2" width={20} height={20} />
                        Delete Job
                    </button>
                    <button className="flex items-center bg-[#DC4A2D] text-white rounded-xl px-4 sm:px-8 lg:px-4 xl:px-8 py-3 hover:bg-blue-600 focus:outline-none">
                        <Image src="/edit-02.png" alt="Edit" className="w-4 h-4 mr-2" width={20} height={20} />
                        Edit Job
                    </button>
                </div>
                <div className='flex flex-col gap-6 sm:gap-12 mt-10 w-full w-[300px] sm:w-[360px] lg:w-[95%] px-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2 text-[14px] leading-[19px] text-[#6E6D6D] font-medium'> <Image src="/user.png" width={20} height={20} />Applicants </div>
                        <div className='font-bold'>{Info.Applicants}</div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex gap-2 text-[14px] leading-[19px] text-[#6E6D6D] font-medium'> <img src="/userMatch.png" width={20} height={20} />Matches</div>
                        <div className='font-bold'>{Info.Matches}</div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex gap-2 text-[14px] leading-[19px] text-[#6E6D6D] font-medium'> <Image src="/message.svg" width={20} height={20} />Messages</div>
                        <div className='font-bold'> {Info.Messages}</div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex gap-2 text-[14px] leading-[19px] text-[#6E6D6D] font-medium'> <Image src="/eye.png" width={20} height={20} />Views</div>
                        <div className='font-bold'>{Info.Views}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}