"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { User, Search } from "lucide-react"

export default function ProfileGate() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const handleSelect = (type: "recruiter" | "stalker") => {
    localStorage.setItem("viewer_type", type)
    router.push("/landing")
  }

  if (loading) return <div className="min-h-screen bg-black" />

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-12"
      >
        <h1 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
          Who&apos;s watching?
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          {/* Recruiter Profile */}
          <button
            onClick={() => handleSelect("recruiter")}
            className="group flex flex-col items-center gap-4 transition-transform hover:scale-105 focus:outline-none"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center border-2 border-transparent group-hover:border-white transition-colors shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <User className="w-16 h-16 text-white relative z-10" />
            </div>
            <div className="space-y-1">
              <span className="block text-lg text-gray-400 group-hover:text-white transition-colors">
                Recruiter
              </span>
              <span className="block text-xs text-gray-600 group-hover:text-gray-400 transition-colors uppercase tracking-widest">
                Hiring / Evaluation
              </span>
            </div>
          </button>

          {/* Stalker Profile */}
          <button
            onClick={() => handleSelect("stalker")}
            className="group flex flex-col items-center gap-4 transition-transform hover:scale-105 focus:outline-none"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center border-2 border-transparent group-hover:border-white transition-colors shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <Search className="w-16 h-16 text-white relative z-10" />
            </div>
            <div className="space-y-1">
              <span className="block text-lg text-gray-400 group-hover:text-white transition-colors">
                Stalker
              </span>
              <span className="block text-xs text-gray-600 group-hover:text-gray-400 transition-colors uppercase tracking-widest">
                Curious Explorer
              </span>
            </div>
          </button>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="border border-zinc-700 text-zinc-500 px-6 py-2 uppercase tracking-widest text-xs hover:border-white hover:text-white transition-colors mt-12"
        >
          Manage Profiles
        </motion.button>
      </motion.div>
    </div>
  )
}
