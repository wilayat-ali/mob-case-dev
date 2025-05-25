import PhysiotherapySidebar from "./sidebar"

export default function Home() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
    <div className="col-span-1">
      <PhysiotherapySidebar />
    </div>
    <main className="col-span-1">
      <h1 className="text-2xl font-bold">Physiotherapy Course Content</h1>
      <p className="mt-4 text-gray-600">Select a topic from the sidebar to view content.</p>
    </main>
  </div>
  
  )
}
