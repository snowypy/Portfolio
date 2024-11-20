declare module 'typewriter-effect/dist/core' {
    interface TypewriterOptions {
      loop?: boolean
      delay?: number
      deleteSpeed?: number
      pauseFor?: number
      strings?: string[]
      cursor?: string
      autoStart?: boolean
      wrapperClassName?: string
      cursorClassName?: string
    }
  
    class Typewriter {
      constructor(container: HTMLElement, options: TypewriterOptions)
      typeString(string: string): Typewriter
      deleteChars(amount: number): Typewriter
      deleteAll(deleteSpeed?: number): Typewriter
      pauseFor(ms: number): Typewriter
      start(): Typewriter
      stop(): Typewriter
    }
  
    export default Typewriter
  }