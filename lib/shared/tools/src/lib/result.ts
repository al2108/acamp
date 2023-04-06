/**
 * The Result class contains a possible result of a computation or an http request.
 * The Result can also contain an error.
 * It is designed to avoid throwing errors,
 * because Typescript has no notion of throws declaration in the method signature.
 * A Result can either conatin a valid result or an error not both.
 */
import {HttpErrorResponse} from '@angular/common/http';

export class Result<O, E extends Error | HttpErrorResponse> {
  /**
   * Constructor.
   * The Constrfuctor is only called via the ok() and err() methods.
   * @param okValue the okValue.
   * @param errorValue the error value.
   */
  private constructor(private okValue: O | null, private errorValue: E | null) {}

  /**
   * Constructs a Result instance with a valid result
   * @param okValue the valid result.
   */
  public static ok<O, E extends Error | HttpErrorResponse>(okValue: O): Result<O, E> {
    return new Result<O, E>(okValue, null);
  }

  /**
   * Constructs a Result instance with an error -> (no valid result).
   * @param errorValue the error value.
   */
  public static err<O, E extends Error | HttpErrorResponse>(errorValue: E): Result<O, E> {
    return new Result<O, E>(null, errorValue);
  }

  /**
   * Returns true if the result contains a valid result.
   */
  public isOk(): boolean {
    return this.okValue !== null;
  }

  /**
   * Returns true if the result contains an error.
   */
  public isError(): boolean {
    return this.errorValue !== null;
  }

  /**
   * Returns the valid result value of the result.
   */
  public getValue(): O {
    if (this.okValue !== null) {
      return this.okValue;
    } else {
      // We should never reach this, only for strictNullChecks compile option!
      throw Error('okValue is null!');
    }
  }

  /**
   * Returns the error value of the result.
   */
  public getError(): E {
    if (this.errorValue !== null) {
      return this.errorValue;
    } else {
      // We should never reach this, only for strictNullChecks compile option!
      throw new Error('errorValue is null!');
    }
  }
}
