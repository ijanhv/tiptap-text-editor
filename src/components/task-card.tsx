import React from "react";
import { Circle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Task {
  title: string;
  time: string;
  status: "pending" | "completed" | "in-progress";
}

interface TaskCardProps {
  tasks: Task[];
}

export function TaskCard({ tasks }: TaskCardProps) {
  return (
    <Card className="w-full max-w-md bg-white p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Scheduled time for work</h3>
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {task.status === "completed" ? (
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              ) : (
                <Circle className="w-6 h-6 text-gray-300" />
              )}
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-gray-500">Time: {task.time}</p>
              </div>
            </div>
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
        ))}
      </div>
    </Card>
  );
}
