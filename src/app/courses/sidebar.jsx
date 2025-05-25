import { CustomCollapsibleItem } from "./CustomCollapsibleItem"

export default function PhysiotherapySidebar() {
  const menuItems = [
    "Physiotherapy Fundamentals",
    "Treatment Techniques",
    "Specialized Therapies",
    "Prevention & Maintenance",
    "Summary & Integration",
  ]

  return (
    <div className="w-full max-w-xs border-r border-gray-200">
      <div className="w-full">
        {menuItems.map((item, index) => (
          <CustomCollapsibleItem key={index} title={item} />
        ))}
      </div>
    </div>
  )
}
