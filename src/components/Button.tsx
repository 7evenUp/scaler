const Button = ({ ...props }: React.ComponentProps<"button">) => {
  return (
    <button
      className="text-2xl bg-fuchsia-200 text-fuchsia-950 outline-none border border-zinc-700 px-3 py-4 rounded-xl hover:bg-opacity-90 active:bg-opacity-80 disabled:cursor-not-allowed transition-opacity"
      {...props}
    />
  )
}

export default Button
