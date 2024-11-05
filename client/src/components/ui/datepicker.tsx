import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect, useState } from "react"
import { ptBR } from "date-fns/locale"

export function DatePicker({ value, onChange, resetDate }) {
  const [date, setDate] = useState<Date>()

  useEffect(() => {
    if (resetDate) {
      setDate(undefined)
    }
  }, [resetDate])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[189px] justify-start text-left mt-[7px] ",
            !date && "text-muted-foreground"
          )}
        >
          {date ? (
            format(date, "PP", { locale: ptBR })
          ) : (
            <p className="text-base text-[#7a869a]">Selecione a data</p>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          locale={ptBR}
          mode="single"
          selected={date}
          onSelect={(date) => {
            if (date) {
              const dateString = date
                ? format(date, "P", { locale: ptBR })
                : date
              onChange(dateString)
              setDate(date)
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
