import React from "react";

const Footer = () => {
  return (
    <div className="bg-white border rounded-t-2xl">
      <div className="flex flex-col md:flex-row w-11/12 m-auto py-6 text-center gap-6">
        <div className="w-full md:w-1/3 m-auto">
          <h1 className="text-2xl">My Logo</h1>
        </div>
        <div className="w-full md:w-1/3">
          <div>
            <h2 className="text-lg">Connect</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/mitubhungani"
                  className="text-blue-500 hover:underline"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mitu-bhungani07/"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
