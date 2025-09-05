import React from "react";
import UserIcon from "./UserIcon";

const OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1)

interface Props {
  name: string
  score: Record<string, number>
  onChange: (name: string, aspect: string, score: number) => void
  aspectKeys: string[]
}

const TableRow = React.memo(({ name, score, onChange, aspectKeys }: Props) => {
  return (
    <div
      className="grid grid-cols-5 gap-4 items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50"
    >
      {/* Student Name */}
      <div className="col-span-1 flex items-center gap-3">
        <UserIcon />
        <span className="font-medium text-gray-700">{name}</span>
      </div>

      {/* Score Selectors */}
      {aspectKeys.map(aspectKey => (
        <div key={aspectKey} className="text-center">
          <select
            value={score[aspectKey]}
            onChange={(e) => onChange(name, aspectKey, Number(e.target.value))}
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
          >
            {OPTIONS.map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
})

export default TableRow
