import Button from './Button'
import { useState, useEffect, useRef } from 'react'

type Props = {
  data: string[]
  setData: React.Dispatch<React.SetStateAction<string[]>>
}

function Ul ({ data, setData }: Props) {
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [editedData, setEditedData] = useState(data)

  const handleInputChange = (index: number, value: string) => {
    const newData = [...editedData]
    newData[index] = value
    setEditedData(newData)
  }

  const editTask = (index: number) => {
    setEditedData([...data])
    setEditIndex(index)
  }

  const updateTask = (index: number) => {
    setData(prevData => {
      const newData = [...prevData]
      newData[index] = editedData[index]
      return newData
    })
    setEditIndex(null)
  }

  const deleteTask = (index: number) => {
    setData(prevData => prevData.filter((_, i) => i !== index))
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [editIndex])

  return (
    <ul className='list-none overflow-auto h-fit max-h-[200px] mt-6'>
      {data.map((elemento, index) => (
        <li
          key={`${elemento}-${index}`}
          className='w-full h-10 flex gap-1 mb-3'
        >
          {editIndex === index ? (
            <>
              <input
                className='w-[80%] border rounded-lg p-5 outline-none'
                value={editedData[index]}
                onChange={e => handleInputChange(index, e.target.value)}
                ref={inputRef}
              />
              <Button
                background='bg-blue-700'
                backgroundHover='bg-blue-600'
                onclick={() => updateTask(index)}
              >
                Actualizar
              </Button>
            </>
          ) : (
            <>
              <div className='w-[60%] h-full flex items-center'>{elemento}</div>
              <Button background='bg-blue-700' backgroundHover='bg-blue-600' onclick={() => editTask(index)}>
                Editar
              </Button>
              <Button background='bg-red-500' backgroundHover='bg-red-400' onclick={() => deleteTask(index)}>
                Eliminar
              </Button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Ul
