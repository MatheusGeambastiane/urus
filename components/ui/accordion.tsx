"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

interface AccordionContextValue {
  openItem: string | null
  setOpenItem: (value: string | null) => void
  collapsible: boolean
}

const AccordionContext = createContext<AccordionContextValue | null>(null)
const AccordionItemContext = createContext<string | null>(null)

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  type?: "single"
  collapsible?: boolean
  defaultValue?: string | null
  children: ReactNode
}

export function Accordion({
  children,
  className,
  type = "single",
  collapsible = false,
  defaultValue = null,
  ...props
}: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(defaultValue)

  const value = useMemo<AccordionContextValue>(() => ({ openItem, setOpenItem, collapsible }), [openItem, collapsible])

  if (type !== "single") {
    console.warn("Accordion atualmente suporta apenas o modo 'single'.")
  }

  return (
    <AccordionContext.Provider value={value}>
      <div
        className={cn("overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60", className)}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  children: ReactNode
}

export function AccordionItem({ value, children, className, ...props }: AccordionItemProps) {
  const itemValue = useMemo(() => value, [value])

  return (
    <AccordionItemContext.Provider value={itemValue}>
      <div className={cn("border-b border-gray-800 last:border-b-0", className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion provider")
  }
  return context
}

const useAccordionItemContext = () => {
  const value = useContext(AccordionItemContext)
  if (!value) {
    throw new Error("AccordionTrigger e AccordionContent precisam estar dentro de AccordionItem")
  }
  return value
}

interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  const { openItem, setOpenItem, collapsible } = useAccordionContext()
  const value = useAccordionItemContext()

  const isOpen = openItem === value

  const handleToggle = useCallback(() => {
    try {
      if (isOpen) {
        setOpenItem(collapsible ? null : value)
      } else {
        setOpenItem(value)
      }
    } catch (error) {
      console.error("Erro ao alternar item do accordion", error)
    }
  }, [collapsible, isOpen, setOpenItem, value])

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-expanded={isOpen}
      className={cn(
        "flex w-full items-center justify-between gap-4 bg-transparent px-6 py-5 text-left text-lg font-semibold text-white transition hover:bg-white/5",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown className={cn("h-5 w-5 text-blue-400 transition-transform", isOpen && "rotate-180")}
        aria-hidden
      />
    </button>
  )
}

interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function AccordionContent({ children, className, ...props }: AccordionContentProps) {
  const { openItem } = useAccordionContext()
  const value = useAccordionItemContext()

  const isOpen = openItem === value

  return (
    <div
      role="region"
      aria-hidden={!isOpen}
      className={cn(
        "grid overflow-hidden px-6 transition-all duration-300 ease-out",
        isOpen ? "grid-rows-[1fr] py-0 pb-6" : "grid-rows-[0fr]",
        className,
      )}
      {...props}
    >
      <div className="min-h-0 text-base leading-relaxed text-gray-300">{children}</div>
    </div>
  )
}
