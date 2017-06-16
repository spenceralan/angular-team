export class Member {
  name: string;
  age: number;
  specialty: string;
  
  constructor(values) {
    this.name = values.name || "Unknown"
    this.age = values.age || 0
    this.specialty = values.specialty || "Undeclared"
  }
}