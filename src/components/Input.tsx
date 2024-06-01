const Input = ({ ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      className="text-2xl bg-transparent outline-none border border-zinc-700 px-3 py-4 rounded-xl"
      {...props}
    />
  )
}

export default Input
