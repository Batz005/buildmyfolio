import { AnimatePresence, motion } from 'framer-motion';
import React, { useActionState, useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6';


export default function ThemeToggle() {

    const [ theme, setTheme ] = useState<'light' | 'dark'>('light');
    useEffect(()=>{
        let state = localStorage.getItem('theme') as 'light' | 'dark' | null;;
        if(state == null){
            if(window.matchMedia){
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                state = prefersDark? 'dark': 'light';
            }
            else{
                state = 'light';
            }
            localStorage.setItem('theme', state);
        }
        document.documentElement.classList.remove(state === 'dark' ? 'light' : 'dark');
        document.documentElement.classList.add(state === 'dark' ? 'dark' : 'light');
        setTheme(state);
    }, []);

    const toggleTheme = () => {
        
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);

        // Save and update state
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };
  return (
    <div
  onClick={toggleTheme}
  role="switch"
  aria-label="Toggle Theme"
  title="Toggle Theme"
  className={`w-8 h-3 border-2 border-primary rounded-full flex items-center cursor-pointer shadow-inner transition-all duration-300
    ${theme === 'light' ? 'justify-start' : 'justify-end'}
    hover:ring-2 hover:ring-[var(--primary)] `}
>
      <motion.div
        layout
        animate={{ rotate: theme === 'light' ? 0 : 360 }}
        transition={{
            layout: { type: 'spring', stiffness: 700, damping: 30 },
            rotate: { duration: 0.4, ease: 'easeInOut' },
        }}
        className="w-5 h-5 rounded-full bg-white flex items-center justify-center"
      >
        {theme === 'light' ? (
            <FaSun className="text-yellow-500 text-sm" />
        ) : (
            <FaMoon className="text-[var(--primary-hover)] text-sm" />
        )}
      </motion.div>
    </div>
  )
}
