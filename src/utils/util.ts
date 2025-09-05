export const assessmentAspects = {
  'aspek_penilaian_1': 'Aspek penilaian 1',
  'aspek_penilaian_2': 'Aspek penilaian 2',
  'aspek_penilaian_3': 'Aspek penilaian 3',
  'aspek_penilaian_4': 'Aspek penilaian 4',
};

export const mockData = (length: number = 10) => Array.from({ length }, (_, i: number) => ({
  id: i + 1,
  name: `Mahasiswa ${i + 1}`,
}));

export const generateInitialScores = (students: Array<Record<string, any>>) => students.reduce((acc, student) => {
  acc[student.name] = {
    'aspek_penilaian_1': 1,
    'aspek_penilaian_2': 1,
    'aspek_penilaian_3': 1,
    'aspek_penilaian_4': 1
  }

  return acc
}, {})

export const toSnakeCase = (char: string) => {
  return char.toLowerCase().replace(' ', '_');
}

