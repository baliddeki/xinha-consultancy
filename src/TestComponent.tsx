import React from 'react';

const TestComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Test basic Tailwind classes */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Tailwind CSS Test
        </h1>
        
        {/* Test if basic classes work */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Basic Tailwind Test
          </h2>
          <p className="text-gray-600 mb-4">
            If you can see proper styling here, Tailwind is working!
          </p>
          
          {/* Test buttons */}
          <div className="space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
              Blue Button
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors">
              Green Button
            </button>
          </div>
        </div>

        {/* Test custom Xinhai colors */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-xinhai-blue mb-4">
            Custom Xinhai Colors Test
          </h2>
          <div className="space-y-4">
            <div className="bg-xinhai-blue text-white p-4 rounded">
              Xinhai Blue Background
            </div>
            <div className="bg-xinhai-blue-light text-white p-4 rounded">
              Xinhai Blue Light Background
            </div>
            <button className="bg-xinhai-blue text-white px-6 py-2 rounded hover:bg-xinhai-blue-dark transition-colors">
              Xinhai Button
            </button>
          </div>
        </div>

        {/* Test grid and responsive */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="font-bold text-red-800">Card 1</h3>
            <p className="text-red-600">Testing grid layout</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold text-green-800">Card 2</h3>
            <p className="text-green-600">Testing responsive design</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800">Card 3</h3>
            <p className="text-blue-600">Testing colors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;