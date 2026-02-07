import { ChevronDown, Download } from "lucide-react";
import { useState } from "react";

export function EditorRightPanel() {
  const [activeTab, setActiveTab] = useState<
    "design" | "prototype" | "inspect"
  >("design");

  return (
    <div className="w-72 border-l border-border bg-background flex flex-col h-screen">
      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex">
          <button
            onClick={() => setActiveTab("design")}
            className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "design"
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Design
          </button>
          <button
            onClick={() => setActiveTab("prototype")}
            className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "prototype"
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Prototype
          </button>
          <button
            onClick={() => setActiveTab("inspect")}
            className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "inspect"
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Inspect
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 space-y-6">
        {activeTab === "design" && (
          <div className="space-y-4">
            {/* Page Section */}
            <div>
              <button className="flex items-center justify-between w-full p-2 rounded hover:bg-secondary transition-colors">
                <span className="text-sm font-medium text-foreground">
                  Page
                </span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
              <div className="mt-2 p-3 rounded-lg bg-secondary text-xs text-muted-foreground">
                Select a frame or component to edit
              </div>
            </div>

            {/* Styles Section */}
            <div>
              <button className="flex items-center justify-between w-full p-2 rounded hover:bg-secondary transition-colors">
                <span className="text-sm font-medium text-foreground">
                  Styles
                </span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
              <div className="mt-2 p-3 rounded-lg bg-secondary text-xs text-muted-foreground">
                No selection
              </div>
            </div>

            {/* Export Section */}
            <div>
              <button className="flex items-center justify-between w-full p-2 rounded hover:bg-secondary transition-colors">
                <span className="text-sm font-medium text-foreground">
                  Export
                </span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
              <div className="mt-2 space-y-2">
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm text-foreground">
                  <Download className="w-4 h-4" />
                  Add export
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "prototype" && (
          <div className="p-3 rounded-lg bg-secondary text-xs text-muted-foreground text-center py-8">
            <div className="font-medium mb-2">Create interactions</div>
            <div>Select an element to add prototype interactions</div>
          </div>
        )}

        {activeTab === "inspect" && (
          <div className="p-3 rounded-lg bg-secondary text-xs text-muted-foreground text-center py-8">
            <div className="font-medium mb-2">Share for inspection</div>
            <div>Share this file with developers for handoff</div>
          </div>
        )}
      </div>
    </div>
  );
}
