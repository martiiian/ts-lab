namespace classes_exercise {
  class User {
    skills: string[] = [];

    addSkill(skill: string): void;
    addSkill(skill: string[]): void;
    addSkill(skill: string | string[]) {
      if (typeof skill === 'string') {
        this.skills.push(skill)
      } else if (Array.isArray(skill)) {
        this.skills = [...this.skills, ...skill]
      }
    }
  }

  const user = new User()
  user.addSkill('пинать хуи')
  user.addSkill(['комбинировать задачи', 'преобразовывать осциломудра'])
// eslint-disable-next-line no-console
  console.log(user.skills)
}
