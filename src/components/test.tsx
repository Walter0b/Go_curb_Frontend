import React from 'react';

const MyComponent: React.FC = () => {
  

    return (
        <div className="w-full h-screen bg-gradient-to-tr from-cyan-400 to-cyan-700">
            <div  id="authOverlay" className="fixed z-10 left-0 top-0 h-full w-full flex items-center justify-center py-3 px-2 overflow-y-auto bg-white/80 backdrop-blur-sm scale-y-0 -translate-x-full opacity-0 origin-center">
                <div id="fourth" className="bg-white/0 max-w-sm m-auto mb-0 sm:mb-auto p-3 border border-white/0 rounded-2xl shadow-sm">
                   
                </div>
            </div>
            <div className="text-center">
                <button  className="bg-white text-cyan-400 font-semibold text-2xl rounded-md border-b-[3px] px-6 py-3 mt-16">Open</button>
            </div>
        </div>
    );
};

export default MyComponent;
