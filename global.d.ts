import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers"

declare global {
    namespace jest {
        interface Matchers<R = void>
            // @ts-expect-error "expect" could not be found
            extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
    }
}
