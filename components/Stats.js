export const Stats = () => {
  return (
    <section
      className="py-20 xl:py-24 bg-white"
      style={{
        backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')",
        backgroundPosition: 'center'
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center text-center -mx-4">
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h2 className="mb-2 text-4xl md:text-5xl font-bold text-coolGray-900 tracking-tighter">
              235.000
            </h2>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              Projects completed
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h2 className="mb-2 font-bold text-4xl md:text-5xl text-coolGray-900 tracking-tighter">
              $10m
            </h2>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              APR
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h2 className="mb-2 font-bold text-4xl md:text-5xl text-coolGray-900 tracking-tighter">
              +50.000
            </h2>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              Hours Saved Annually
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4">
            <h2 className="mb-2 font-bold text-4xl md:text-5xl text-coolGray-900 tracking-tighter">
              3.500
            </h2>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              Unique Users
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
