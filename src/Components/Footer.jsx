const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <ul className="flex gap-3 text-gray-500">
          <li>
            <a href="#">FaceBook</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
        <div className="flex gap-2">
          <img src="./assets/HelpAvatar.svg" alt="helper" />
          <div>
            <p className="font-thin">Have a Question?</p>
            <a href="#" className="font-medium">
              Connect to expert
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-gray-500 text-xs">
          Copyright © 2021 Help. All rights reserved.
        </p>
      </div>
    </>
  );
};
export default Footer;
