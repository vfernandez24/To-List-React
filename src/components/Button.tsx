type Props = {
  children: React.ReactNode
  background: string
  backgroundHover: string
  onclick: () => void
}

function Button({children, onclick, background, backgroundHover}: Props) {
  return (
    <button className={`w-[20%] h-full ${background} text-white rounded-xl flex items-center justify-center transition hover:${backgroundHover}`}onClick={onclick}>{children}</button>
  )
}

export default Button