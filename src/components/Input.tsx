type Props = {
  submit: () => void
}

function Input ({ submit }: Props) {
  return (
    <div className='w-full h-10 flex justify-between gap-1'>
      <input className="bg-[#ececec] rounded-lg outline-none h-full w-[90%] p-5" type='text' name='' id='input' />
      <button className="bg-blue-950 rounded-lg text-white h-full w-fit px-4 transition hover:bg-blue-800" onClick={submit}>Añadir</button>
    </div>
  )
}

export default Input
