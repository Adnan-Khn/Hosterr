const Body = () => {
  return (
    <div className="space-y-4 lg:flex lg:items-center lg:justify-between lg:space-y-0">
      <div className="flex items-center justify-center px-6 py-3 lg:flex-1 lg:order-2 lg:justify-end">
        <img
          src="./assets/BlueShape.svg"
          alt="blue"
          className=" -rotate-45 h-64 md:h-80 lg:h-[400px]"
        />
        <img
          src="./assets/PinkShape.svg"
          alt="pink"
          className="absolute -rotate-[30deg] h-64 md:h-80 lg:h-[400px]"
        />
        <img
          src="./assets/PurpleShape.svg"
          alt="purple"
          className="absolute -rotate-[15deg] h-64 md:h-80 lg:h-[400px]"
        />
        <img
          src="./assets/HeroImageModel.png"
          alt="hero"
          className="absolute h-64 md:h-80 lg:h-[400px]"
        />
      </div>
      <div className="lg:flex-1 lg:or ">
        <h1 className="text-5xl font-bold font-playfair leading-20">Host your website in less than 5 minutes</h1>
        <p className="font-lato text-gray-500">
          Tired of unreliable web hosting? Hosterr offers a haven for your
          website. We prioritize lightning-fast speed and top-notch security,
          ensuring your online presence thrives. Our user-friendly platform and
          responsive support team make managing your website a breeze. Hosterr
          scales with you, so you can focus on building your online journey
          while we handle the technical foundation. Join the Hosterr community
          and experience the difference!
        </p>
        <form action="" className="flex flex-col gap-4 py-4 md:flex-row">
            <input className="rounded-md px-4 py-3 placeholder:text-gray-500" type="email" placeholder="Enter your Email"/>
            <button className="rounded-md px-4 py-3 text-white bg-gray-500 hover:bg-gray-700">Join Community</button>
        </form>
        <div className="flex gap-3 ">
        <img src="./assets/Checkmark.svg" alt="check"/>
        <p>No span ever, Unsubscribe</p>
      </div>
      </div>
      
    </div>
  );
};
export default Body;
