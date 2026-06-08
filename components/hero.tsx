"use client"

import { useEffect, useState } from "react"

export default function HerroComponent() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0) 
  
  const words = ["Learning", "Testing", "Reporting"]
  const currentFullText = words[wordIndex]
  const typingSpeed = isDeleting ? 100 : 120 

  useEffect(() => {
    const handleType = () => {
      if (!isDeleting) {
        setText(currentFullText.substring(0, text.length + 1))
        if (text === currentFullText) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setText(currentFullText.substring(0, text.length - 1))
        if (text === "") {
          setIsDeleting(false)
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        }
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, currentFullText])

  return (

    <div className="relative isolate p-12 overflow-hidden h-screen w-full flex flex-col justify-center">
      
      {/* Background Video - Now set to z-0 so it stays above the page background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay - Set to z-10 (above the video) */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>

      {/* Main Content - Set to z-20 (above the overlay) */}
      <div className="relative z-20 w-full">
        <h2 className="text-white w-4/5 m-auto text-3xl flex gap-2">
          <span>Better</span>
          <div className="flex text-center">
              <span>{text}</span>
              <span className="font-black text-amber-300 animate-pulse [animation-duration:0.8s]">|</span>
          </div>
        </h2>
        <h4 className="w-4/5 m-auto text-amber-400 font-medium text-4xl mt-2">Built with our team.</h4>
        <br />
        <p className="w-4/5 m-auto text-white font-medium text-3xl">
          The AI-powered lesson management platform for tutors
        </p>
        
        <div className="w-4/5 m-auto mt-8 opacity-80">
            <a className="p-3 bg-spark-grey-50 rounded-2xl text-white cursor-pointer hover:bg-spark-grey-30" href="#howWorks">
              Learn More
            </a>
        </div>
      </div>
    </div>
  )
}