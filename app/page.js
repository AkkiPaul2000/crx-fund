"use client"
import FundingForm from "@/components/FundingForm";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
      <div className="container flex items-center justify-center min-h-screen ">
        <FundingForm/>
      </div>
    </ThemeProvider>

  )
}
