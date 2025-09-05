import { useCallback, useMemo, useState } from 'react'
import { assessmentAspects, generateInitialScores, mockData, toSnakeCase } from './utils/util'
import TableRow from './components/TableRow'

function App() {
  const students = useMemo(() => mockData(), [])
  const [scores, setScores] = useState(generateInitialScores(students))
  const [output, setOutput] = useState('')
  const handleScoreChange = useCallback((name: string, aspect: string, value: number) => {
    setScores(prevScores => ({
      ...prevScores,
      [name]: {
        ...prevScores[name],
        [aspect]: value
      }
    }))
  }, [])
  const aspectKeys = useMemo(() => Object.keys(assessmentAspects), [])

  const handleSave = useCallback(() => {
    const output = {
      ...aspectKeys.reduce((acc, key) => {
        acc[key] = {}

        students.forEach(student => {
          acc[key][toSnakeCase(student.name)] = scores[student.name][key]
        })

        return acc
      }, {})
    }

    setOutput(JSON.stringify(output, null, 4))
  }, [scores, students, aspectKeys])

  return (
    <div className='min-h-screen bg-gray-50 py-10'>
      {/* header */}
      <div className='w-full'>
        <h1 className='text-2xl font-semibold text-center text-gray-800'>Aplikasi Penilaian Mahasiswa</h1>
      </div>

      {/* row header */}
      <div className='grid grid-cols-5 gap-4 items-center p-3 rounded-lg hover:bg-gray-50'>
        <div className='col-span-1 flex items-center gap-3'>
        </div>
        {aspectKeys.map((aspectKey: string) => (
          <div key={aspectKey} className="text-center">
            <span className='font-medium text-gray-700'>{assessmentAspects[aspectKey]}</span>
          </div>
        ))}
      </div>

      {/* table row */}
      <div className='space-y-2'>
        {students.map((student: Record<string, any>) => (
          <TableRow
            name={student.name}
            score={scores[student.name]}
            key={student.id}
            onChange={handleScoreChange}
            aspectKeys={aspectKeys}
          />
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <button
          onClick={handleSave}
          className="bg-black text-white font-bold py-2 px-8 rounded-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          Simpan
        </button>
      </div>

      {output.length > 0 &&
        <div className='px-5'>
          <div className='mt-8 w-full bg-gray-200 rounded-lg p-4 text-gray-800 font-mono'>
            <pre>{output}</pre>
          </div>
        </div>
      }


    </div>
  )

}

export default App
