export class utils {
  public static fizzBuzz(num: number): string {
    let result: string = '';
    if (num % 3 === 0) result += 'Fizz';
    if (num % 5 === 0) result += 'Buzz';
    if (result === '') result = `${num}`;
    return result;
  }
}
