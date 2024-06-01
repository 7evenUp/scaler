import { useState } from "react"
import { Toaster, toast } from "sonner"

import Logo from "./assets/logo.svg?react"

import Input from "./components/Input"
import Button from "./components/Button"

function App() {
  const [viewportValue, setViewportValue] = useState("1920")
  const [neededValue, setNeededValue] = useState("")
  const [history, setHistory] = useState<
    Array<{ start: string; result: string }>
  >([])

  const onCalculate = async () => {
    const result = (
      (parseInt(neededValue) * 100) /
      parseInt(viewportValue)
    ).toFixed(4)
    const copyResult = `[${result}vw]`

    await navigator.clipboard.writeText(copyResult)

    toast(`Значение ${copyResult} скопировано в буфер обмена`)

    setHistory((prev) => [...prev, { start: neededValue, result: copyResult }])
    setNeededValue("")
  }

  return (
    <>
      <Toaster />
      <main className="bg-zinc-800 text-zinc-200 w-screen h-screen flex flex-col items-center justify-center p-10">
        <header className="absolute left-10 top-10 flex items-center gap-4">
          <Logo className="w-28 h-auto" />
          <h1 className="text-7xl text-[#F0C0D8]">Scaler</h1>
        </header>
        <div className="flex flex-col gap-8">
          <label className="flex flex-col gap-4 text-xl">
            Viewport width
            <Input
              type="number"
              value={viewportValue}
              onChange={(evt) => setViewportValue(evt.currentTarget.value)}
              placeholder="Ширина viewport"
            />
          </label>
          <label className="flex flex-col gap-4 text-xl">
            Value for scaling (px)
            <Input
              type="number"
              value={neededValue}
              onChange={(evt) => setNeededValue(evt.currentTarget.value)}
              placeholder="Введите значение"
            />
          </label>
          <Button
            onClick={onCalculate}
            disabled={
              viewportValue.trim().length === 0 ||
              neededValue.trim().length === 0
            }
          >
            Calculate
          </Button>
        </div>

        {history.length > 0 && (
          <div className="absolute right-10 top-10">
            <h2 className="text-3xl text-zinc-200 mb-4">История</h2>
            <div className="min-w-80 p-4 rounded-xl border border-zinc-700 flex flex-col max-h-[400px] overflow-auto">
              {history.map((el, i) => (
                <div key={i}>
                  {el.start}px - {el.result}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default App
