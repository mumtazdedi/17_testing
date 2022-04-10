import { renderHook } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("useInputValue", () => {
    it("return current inital value", () => {
        const { result } = renderHook(() => useInputValue("initial value"));

        expect(result.current.value).toEqual("initial value");
    });
    it("return current value on change", () => {
        const { result } = renderHook(() => useInputValue("initial value"));

        result.current.onChange({ target: { value: "new value test" } });

        expect(result.current.value).toEqual("new value test");
    });
});

