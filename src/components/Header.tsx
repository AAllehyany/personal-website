import React from 'react';

const WebsiteHeader = () => {
  return (
    <div className="container mx-auto p-3">
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl text-teal-800 font-squada font-light">Ahmad Allehyany</h1>
        </div>
        <div className="flex justify-center items-center">
          <span className="cursor-pointer mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current text-gray-600 hover:text-gray-800 w-10 h-10">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          </span>
          <span className="cursor-pointer mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  className="fill-current text-blue-300 hover:text-blue-500 w-10 h-10">
              <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
            </svg>
          </span>
          
          <span className="cursor-pointer mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current text-yellow-300 hover:text-yellow-500 w-10 h-10">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default WebsiteHeader;