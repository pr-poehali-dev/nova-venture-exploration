import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Check, ChevronRight, ChevronLeft, User, Phone, Send, Car, ChevronDown } from 'lucide-react'
import { carBrands, getModelsByBrand } from '@/data/carData'

interface BookingFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface FormData {
  fullName: string
  phone: string
  telegram: string
  carBrand: string
  carModel: string
}

const steps = [
  { id: 1, label: 'Имя', icon: User, title: 'Как вас зовут?', description: 'Введите ваше имя и фамилию' },
  { id: 2, label: 'Телефон', icon: Phone, title: 'Ваш номер телефона', description: 'Мы свяжемся с вами для подтверждения' },
  { id: 3, label: 'Telegram', icon: Send, title: 'Ваш Telegram', description: 'Укажите @юзернейм для связи' },
  { id: 4, label: 'Авто', icon: Car, title: 'Ваш автомобиль', description: 'Выберите марку и модель вашего авто' },
]

// Autocomplete Combobox Component
interface ComboboxProps {
  value: string
  onChange: (value: string) => void
  options: string[]
  placeholder: string
  disabled?: boolean
  autoFocus?: boolean
}

function Combobox({ value, onChange, options, placeholder, disabled, autoFocus }: ComboboxProps) {
  const [inputValue, setInputValue] = useState(value)
  const [open, setOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(inputValue.toLowerCase())
  )

  useEffect(() => {
    setInputValue(value)
  }, [value])

  useEffect(() => {
    setHighlighted(0)
  }, [inputValue])

  const select = (opt: string) => {
    setInputValue(opt)
    onChange(opt)
    setOpen(false)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onChange('')
    setOpen(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || filtered.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlighted((h) => Math.min(h + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlighted((h) => Math.max(h - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filtered[highlighted]) select(filtered[highlighted])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (listRef.current && open) {
      const item = listRef.current.children[highlighted] as HTMLElement
      item?.scrollIntoView({ block: 'nearest' })
    }
  }, [highlighted, open])

  return (
    <div className="relative">
      <div className="relative">
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={handleInput}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-gray-600 focus:border-[#FF4D00] focus:ring-[#FF4D00]/20 h-11 pr-9"
        />
        <ChevronDown
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </div>
      <AnimatePresence>
        {open && filtered.length > 0 && (
          <motion.ul
            ref={listRef}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-1 bg-[#141414] border border-[#2a2a2a] rounded-lg shadow-xl max-h-48 overflow-y-auto"
          >
            {filtered.map((opt, i) => (
              <li
                key={opt}
                onMouseDown={() => select(opt)}
                className={`px-3 py-2 text-sm cursor-pointer transition-colors duration-100 ${
                  i === highlighted
                    ? 'bg-[#FF4D00]/20 text-[#FF4D00]'
                    : 'text-gray-200 hover:bg-[#1f1f1f]'
                }`}
              >
                {opt}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function BookingForm({ open, onOpenChange }: BookingFormProps) {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    telegram: '',
    carBrand: '',
    carModel: '',
  })

  const currentStep = steps[step - 1]

  const handleNext = () => {
    if (step < steps.length) {
      setDirection(1)
      setStep((s) => s + 1)
    } else {
      setSubmitted(true)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setDirection(-1)
      setStep((s) => s - 1)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(() => {
      setStep(1)
      setSubmitted(false)
      setFormData({ fullName: '', phone: '', telegram: '', carBrand: '', carModel: '' })
    }, 300)
  }

  const getCurrentValue = () => {
    switch (step) {
      case 1: return formData.fullName
      case 2: return formData.phone
      case 3: return formData.telegram
      case 4: return formData.carBrand
      default: return ''
    }
  }

  const isCurrentStepValid = () => {
    if (step === 4) {
      return formData.carBrand.trim().length > 0 && formData.carModel.trim().length > 0
    }
    return getCurrentValue().trim().length > 0
  }

  const handleChange = (value: string) => {
    switch (step) {
      case 1: setFormData((d) => ({ ...d, fullName: value })); break
      case 2: setFormData((d) => ({ ...d, phone: value })); break
      case 3: setFormData((d) => ({ ...d, telegram: value })); break
    }
  }

  const getPlaceholder = () => {
    switch (step) {
      case 1: return 'Иван Иванов'
      case 2: return '+7 (999) 000-00-00'
      case 3: return '@username'
      default: return ''
    }
  }

  const getInputType = () => {
    switch (step) {
      case 2: return 'tel'
      default: return 'text'
    }
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  }

  const availableModels = getModelsByBrand(formData.carBrand)

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-[#0a0a0a] border border-[#1a1a1a] text-white max-w-md p-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-0">
          <DialogTitle className="text-white text-xl font-bold">
            Запись на детейлинг
          </DialogTitle>
        </DialogHeader>

        {/* Step indicators */}
        {!submitted && (
          <div className="flex items-center justify-between px-6 pt-4">
            {steps.map((s, i) => {
              const StepIcon = s.icon
              const isCompleted = step > s.id
              const isActive = step === s.id
              return (
                <div key={s.id} className="flex items-center">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCompleted
                          ? 'bg-[#FF4D00] text-black'
                          : isActive
                          ? 'bg-[#FF4D00]/20 border border-[#FF4D00] text-[#FF4D00]'
                          : 'bg-[#1a1a1a] text-gray-600 border border-[#2a2a2a]'
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <StepIcon className="w-4 h-4" />
                      )}
                    </div>
                    <span
                      className={`text-[10px] font-medium transition-colors duration-300 ${
                        isActive ? 'text-[#FF4D00]' : isCompleted ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`h-px w-12 mx-1 mb-4 transition-all duration-500 ${
                        step > s.id ? 'bg-[#FF4D00]' : 'bg-[#2a2a2a]'
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-4 min-h-[180px] relative overflow-visible">
          <AnimatePresence mode="wait" custom={direction}>
            {submitted ? (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, type: 'spring' }}
                className="flex flex-col items-center justify-center py-6 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#FF4D00]/20 border border-[#FF4D00] flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#FF4D00]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Заявка принята!</h3>
                  <p className="text-gray-400 text-sm">
                    Свяжемся с вами в течение 15 минут
                  </p>
                </div>
                <div className="w-full bg-[#1a1a1a] rounded-lg p-3 text-left space-y-1.5 mt-2">
                  {[
                    { label: 'Имя', value: formData.fullName },
                    { label: 'Телефон', value: formData.phone },
                    { label: 'Telegram', value: formData.telegram },
                    { label: 'Авто', value: `${formData.carBrand} ${formData.carModel}` },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between text-sm">
                      <span className="text-gray-500">{item.label}:</span>
                      <span className="text-white font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{currentStep.title}</h3>
                  <p className="text-gray-400 text-sm mt-0.5">{currentStep.description}</p>
                </div>

                {step === 4 ? (
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label className="text-gray-300 text-sm">Марка</Label>
                      <Combobox
                        value={formData.carBrand}
                        onChange={(val) => {
                          setFormData((d) => ({ ...d, carBrand: val, carModel: '' }))
                        }}
                        options={carBrands}
                        placeholder="Например: Toyota"
                        autoFocus
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className={`text-sm ${formData.carBrand ? 'text-gray-300' : 'text-gray-600'}`}>
                        Модель
                      </Label>
                      <Combobox
                        value={formData.carModel}
                        onChange={(val) => setFormData((d) => ({ ...d, carModel: val }))}
                        options={availableModels.length > 0 ? availableModels : []}
                        placeholder={formData.carBrand ? 'Выберите модель' : 'Сначала выберите марку'}
                        disabled={!formData.carBrand}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-sm">{currentStep.label}</Label>
                    <Input
                      type={getInputType()}
                      placeholder={getPlaceholder()}
                      value={getCurrentValue()}
                      onChange={(e) => handleChange(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && isCurrentStepValid() && handleNext()}
                      autoFocus
                      className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-gray-600 focus:border-[#FF4D00] focus:ring-[#FF4D00]/20 h-11"
                    />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 flex justify-between items-center gap-3">
          {!submitted ? (
            <>
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={step === 1}
                className="text-gray-400 hover:text-white hover:bg-[#1a1a1a] disabled:opacity-0"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Назад
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isCurrentStepValid()}
                className="bg-[#FF4D00] hover:bg-[#e04400] text-black font-semibold px-6 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {step === steps.length ? 'Отправить' : 'Далее'}
                {step !== steps.length && <ChevronRight className="w-4 h-4 ml-1" />}
              </Button>
            </>
          ) : (
            <Button
              onClick={handleClose}
              className="w-full bg-[#FF4D00] hover:bg-[#e04400] text-black font-semibold"
            >
              Закрыть
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
