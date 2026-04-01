import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="#1a1a1a"
          hoverFillColor="#FF4D00"
        />
      </div>
      {/* Логотип */}
      <div className="fixed top-0 left-0 z-30 p-6 md:p-8">
        <span className="text-white font-bold text-xl tracking-widest uppercase">
          Detail<span className="text-[#FF4D00]">Pro</span>
        </span>
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}