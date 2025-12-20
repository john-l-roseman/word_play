import { DragDropGame } from "@/components/drag-drop-game"
import { DesktopNav } from "@/components/desktop-nav"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-card border-b border-border p-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Drag and Drop</h1>
        <DesktopNav />
        <MobileNav />
      </header>
      <main className="flex-1 overflow-hidden">
        <DragDropGame />
      </main>
    </div>
  )
}
