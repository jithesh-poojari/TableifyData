"use client";

import { useState, useEffect } from "react"
import { ThemeProvider } from "next-themes";

const Provider = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
		setMounted(true)
	}, [])
 
	if (!mounted) {
		return <>{children}</>
	}

  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
