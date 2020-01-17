class Model {
  titles: string[]
  shortTitles: string[]
  formulaParts: number[]

  constructor() {
    this.titles = [
      'Pound',
      'Kilogram', 
      'Stone', 
      'Ounce',
      'Tonne'
    ]
    this.shortTitles = [
      'lb', 
      'kg', 
      'st', 
      'oz', 
      'T'
    ]
    this.formulaParts = [
      2.20462,
      1,
      .157473,
      35.274,
      .001
    ]
  }
  getAllData(): object[] {
    return [this.shortTitles, this.titles, this.formulaParts]
  }
  getUnitIndex(unit: string): number {
    return this.shortTitles.indexOf(unit)
  }
  getMessage(unitIndex: number): string {
    return `Enter ${this.titles[unitIndex]}s...`
  }
  getFormulaPart(unitIndex: number): number {
    return this.formulaParts[unitIndex]
  }
}

export default Model
