'use client';

import dynamic from 'next/dynamic';

const MapContent = dynamic(() => import('./MapContent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 animate-pulse rounded-[1.5rem] flex items-center justify-center">
      <span className="text-gray-400 font-medium">Loading Map...</span>
    </div>
  ),
});

export default function ZamfaraMap() {
  return (
    <div className="w-full h-full min-h-[400px] sm:h-[60vh] rounded-[1.5rem] overflow-hidden border border-gray-200">
      <MapContent />
    </div>
  );
}