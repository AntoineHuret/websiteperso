import type React from "react"

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-8">{children}</div>
}

export const TimelineItem = ({
  children,
  icon,
  date,
}: {
  children: React.ReactNode
  icon: React.ReactNode
  date: string
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">{icon}</div>
        <div className="w-px h-full bg-gray-300"></div>
      </div>
      <div className="pb-8 w-full">
        <div className="flex items-center mb-1">
          <div className="font-medium text-sm text-gray-500">{date}</div>
        </div>
        <div className="bg-white p-4 rounded shadow">{children}</div>
      </div>
    </div>
  )
}

