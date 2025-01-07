import Input from './components/Input'
import Ul from './components/Ul'
import { useState } from 'react'

function App () {
  const [data, setData] = useState<string[]>([])

  const addTask = () => {
    if (document.getElementById('input').value) {
      setData([...data, document.getElementById('input').value])
    }
    document.getElementById('input').value = ''
  }

  return (
    <>
      <div className='container w-[450px] min-h-[150px] h-fit border rounded-xl p-5'>
        <h1 className='text-center text-2xl font-semibold mb-4'>
          To-Do List<i className='fa-solid fa-list ml-2'></i>
        </h1>
        <Input submit={addTask} />
        <Ul data={data} setData={setData} />
      </div>
    </>
  )
}

export default App
