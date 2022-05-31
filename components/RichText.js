export const RichText = () => {
  return (
    <section
      className="py-20 bg-white xl:pt-24 xl:pb-28"
      style={{
        backgroundImage: 'url(/elements/pattern-white.svg)',
        backgroundPosition: 'center'
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-5 lg:w-1/2 lg:mb-0">
            <h3 className="mb-5 text-3xl font-bold tracking-tighter md:text-4xl text-coolGray-900">
              Flex is a simple, beautiful tool that helps you work sanely
            </h3>
            <p className="mb-6 text-lg font-semibold leading-8 md:text-xl text-coolGray-500">
              The only SaaS business platform that combines CRM, marketing
              automation &amp; commerce.
            </p>
            <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">
              With a single point of view, Flex integrates customer data and
              marketing tools in one flexible cloud platform that lets you get
              business results wherever they show up. Flex is the only saas
              business platform that lets you run your business on one platform,
              seamlessly across all digital channels.
            </p>
            <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">
              With Flex, you can run your business on one platform, seamlessly
              across all digital channels&mdash;and grow it anywhere. With a
              single point of view, Flex integrates customer data and marketing
              tools in one flexible cloud platform that lets you get business
              results wherever they show up.
            </p>
            <p className="text-lg font-medium leading-7 text-coolGray-500">
              Flex is the only saas business platform that lets you run your
              business on one platform.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">
              <span>
                With Flex, you can run your business on one platform, seamlessly
                across all digital channels&mdash;and grow it anywhere. With a
                single point of view, Flex integrates customer data and
                marketing tools in one flexible cloud platform that lets you get
                business results wherever they show up.
              </span>
              <ol className="mb-5 text-lg font-medium leading-7 list-decimal list-inside text-coolGray-500">
                <li>
                  <span className="text-lg font-medium leading-8 text-coolGray-500">
                    Enterprise software for startups
                  </span>
                </li>
                <li>
                  <span className="text-lg font-medium leading-8 text-coolGray-500">
                    Time is money. Stop jumping from tool to tool with all the
                    hassle of integrations.
                  </span>
                </li>
                <li>
                  <span className="text-lg font-medium leading-8 text-coolGray-500">
                    Now you can manage your entire business on one platform.
                  </span>
                </li>
              </ol>
            </p>
            <p className="text-lg font-medium leading-7 text-coolGray-500">
              With a single point of view, Flex integrates customer data and
              marketing tools in one flexible cloud platform that lets you get
              business results wherever they show up. Flex is the only saas
              business platform that lets you run your business on one platform,
              seamlessly across all digital channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
