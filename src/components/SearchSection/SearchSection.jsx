
const SearchSection = () => {
  return (
    <div className="">
      <form action="">
    <div className="flex mt-[12%] gap-2 justify-center items-center w-full">
        <span className="hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25
                 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                 clipRule="evenodd" />
            </svg>
        </span>
    <input type="text" placeholder="What is kuduro" className="w-80 rounded-full p-4 h-12 bg-gray-200"/>
    </div>
     
    </form>
    {/* <div className="m-auto p-4 h-screen border-2 border-gray mt-12 w-1/2">
        <h2 className="text-center text-xl ">Recent</h2>
    </div> */}
</div>

  )
}

export default SearchSection
