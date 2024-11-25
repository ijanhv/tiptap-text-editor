import React from "react";
import { Card } from "@/components/ui/card";

export function ProgressCard() {
  return (
    <Card className="w-full max-w-sm bg-white p-6 shadow-lg">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Weekly Progress</h3>
          <button className="text-gray-400">...</button>
        </div>
        <p className="text-sm text-gray-500">Start from Nov 17-24, 2023</p>
        <div className="relative pt-4">
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="3"
                  strokeDasharray="75, 100"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-2xl font-bold">75%</span>
                <span className="block text-xs text-gray-500">completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
