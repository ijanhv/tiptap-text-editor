import React from "react";
import { Card } from "@/components/ui/card";

export function StatsCard() {
  return (
    <Card className="w-full max-w-sm bg-white p-6 shadow-lg">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Statistic</h3>
        <div className="h-40 flex items-end space-x-2">
          {[4, 6, 3, 7, 5, 8, 4, 6, 5, 7, 3].map((value, index) => (
            <div
              key={index}
              className="w-4 bg-blue-500 rounded-t"
              style={{ height: `${value * 10}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>24h</span>
          <span className="bg-gray-900 text-white px-2 rounded">1d</span>
          <span>3d</span>
          <span>1w</span>
          <span>3w</span>
          <span>1m</span>
        </div>
      </div>
    </Card>
  );
}
