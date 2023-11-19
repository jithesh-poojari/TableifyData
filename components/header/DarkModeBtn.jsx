"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { HiMoon, HiSun  } from "react-icons/hi";
 
const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false)
	const { systemTheme, theme, setTheme } = useTheme()
 
	useEffect(() => {
		setMounted(true)
	}, [])
 
	if (!mounted) {
		return null
	}
 
	const currentTheme = theme === "system" ? systemTheme : theme
 
	return (
		<div>
			{currentTheme === "dark" ? (
				<HiSun
					className="w-6 h-6 text-white cursor-pointer"
					onClick={() => setTheme("light")}
				/>
			) : (
				<HiMoon
					className="w-6 h-6 text-gray-900 cursor-pointer"
					onClick={() => setTheme("dark")}
				/>
			)}
		</div>
	)
}
export default DarkModeBtn