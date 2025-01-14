import { renderHook, act } from "@testing-library/react";
import { useSlideTimer } from "./useSlideTimer";

describe("useSlideTimer", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("initializes with correct duration", () => {
    const { result } = renderHook(() => useSlideTimer({ duration: 30 }));

    expect(result.current.timeLeft).toBe(30);
    expect(result.current.isRunning).toBe(false);
  });

  it("starts automatically when autoStart is true", async () => {
    const { result } = renderHook(() =>
      useSlideTimer({ duration: 30, autoStart: true })
    );

    expect(result.current.isRunning).toBe(true);

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current.timeLeft).toBe(28);
  });

  it("handles pause and resume correctly", () => {
    const { result } = renderHook(() => useSlideTimer({ duration: 30 }));

    act(() => {
      result.current.start();
    });

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current.timeLeft).toBe(28);

    act(() => {
      result.current.pause();
    });

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current.timeLeft).toBe(28);
  });

  it("resets timer correctly", () => {
    const { result } = renderHook(() => useSlideTimer({ duration: 30 }));

    act(() => {
      result.current.start();
    });

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(result.current.timeLeft).toBe(25);

    act(() => {
      result.current.reset();
    });

    expect(result.current.timeLeft).toBe(30);
    expect(result.current.isRunning).toBe(false);
  });
});
