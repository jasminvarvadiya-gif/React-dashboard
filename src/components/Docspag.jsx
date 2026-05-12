import React from "react";

const Docspag = () => {
  return (
    <>
      <div className="container py-5">
        <div className="conten">
          <div className="docs">
            <h1 className="text-2xl py-1">Documentation</h1>
            <p>
              This documentation will guide you through the setup and usage of
              the InApp Inventory Dashboard template.
            </p>
          </div>
          <div className="txt-second py-5">
            <h1 className=" text-2xl">Prerequisites</h1>
            <p className=" pb-10">
              Before you begin, ensure you have the following installed
            </p>
            <h1 className="text-xl py-2 border-b">Node.js (v14 or higher)</h1>
            <h1 className="text-xl py-2 border-b">
              npm or yarn package manager
            </h1>
            <h1 className="text-xl py-1">
              [Any other specific tools/dependencies]
            </h1>
          </div>
          <div className="txt-three">
            <h1 className="text-2xl py-1">Installation</h1>
            <p className="py-2 border-b">
              {" "}
              1.Clone the repository or download the template
            </p>
            <p className="py-2 border-b">
              {" "}
              2.Navigate to the project directory
            </p>
            <p className="py-2"> 3.Install dependencies:</p>
            <p className=" border w-full bg-gray-300 text-gray-700 px-5 py-2 rounded">
              npm install
            </p>
          </div>
          <div className="for-line py-5">
            <h1 className="text-xl">Run the app</h1>
            <p>To start the development server:</p>
            <p className=" mt-3 border bg-gray-300 text-gray-600 px-5 py-2 rounded">
              npm run dev
            </p>
          </div>
          <div className="next-line">
            <h1 className="text-xl">Next Steps</h1>
            <p className="py-2 border-b">
              1.Review the main entry point in src/js/main.js
            </p>
            <p className="py-2 border-b">
              2.Customize components according to your needs
            </p>
            <p className="py-1">3.Build for production:</p>
            <p className="border bg-gray-300 text-gray-700 px-3 py-2 mt-2 rounde">npm run build</p>
          </div>
          <div className="supot py-5">
            <h1 className="text-2xl">Support</h1>
            <p className="py-3">For issues or questions, please refer to the documentation or create an issue in the repository. Also you can contact us at <span className="text-orange-400">CodesCandy.</span></p>
          </div>
        </div>
      </div>
      <footer>
        <h1 className=" text-xl text-center py-10">Copyright © 2026 InApp Inventory Dashboard. Developed by <span className="text-orange-400">CodesCandy</span> • Distributed by <span className="text-orange-400">ThemeWagon</span></h1>
      </footer>
    </>
  );
};

export default Docspag;
