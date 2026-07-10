import { useDrawerStackPosition } from "./useDrawerStackPosition";
import { act, renderHook } from "@test-utils/render";

const mountDrawerStack = (initialProps: { isOpen: boolean }) => {
  return renderHook(({ isOpen }) => useDrawerStackPosition(isOpen), { initialProps });
};

describe("useDrawerStackPosition", () => {
  const mountedHooks: ReturnType<typeof mountDrawerStack>[] = [];

  const resetMountedDrawers = (): void => {
    mountedHooks.forEach(({ unmount }) => unmount());
    mountedHooks.length = 0;
  };

  beforeEach(() => {
    resetMountedDrawers();
  });

  afterEach(() => {
    resetMountedDrawers();
  });

  const trackHook = (hook: ReturnType<typeof mountDrawerStack>) => {
    mountedHooks.push(hook);

    return hook;
  };

  it("returns false when the drawer is closed", () => {
    const { result } = trackHook(mountDrawerStack({ isOpen: false }));

    expect(result.current.isBottomMostOpenDrawer).toBe(false);
  });

  it("does not register a closed drawer in the stack", () => {
    trackHook(mountDrawerStack({ isOpen: false }));
    const { result } = trackHook(mountDrawerStack({ isOpen: true }));

    expect(result.current.isBottomMostOpenDrawer).toBe(true);
  });

  it("returns true when a single drawer is open", () => {
    const { result } = trackHook(mountDrawerStack({ isOpen: true }));

    expect(result.current.isBottomMostOpenDrawer).toBe(true);
  });

  it("shows the visible mask only on the bottom-most drawer when nested", () => {
    const parent = trackHook(mountDrawerStack({ isOpen: true }));
    const child = trackHook(mountDrawerStack({ isOpen: true }));

    expect(parent.result.current.isBottomMostOpenDrawer).toBe(true);
    expect(child.result.current.isBottomMostOpenDrawer).toBe(false);
  });

  it("registers nested drawers in open order", () => {
    const first = trackHook(mountDrawerStack({ isOpen: true }));
    const second = trackHook(mountDrawerStack({ isOpen: true }));
    const third = trackHook(mountDrawerStack({ isOpen: true }));

    expect(first.result.current.isBottomMostOpenDrawer).toBe(true);
    expect(second.result.current.isBottomMostOpenDrawer).toBe(false);
    expect(third.result.current.isBottomMostOpenDrawer).toBe(false);
  });

  it("promotes the parent when the top nested drawer closes", () => {
    const parent = trackHook(mountDrawerStack({ isOpen: true }));
    const child = trackHook(mountDrawerStack({ isOpen: true }));

    act(() => {
      child.rerender({ isOpen: false });
    });

    expect(parent.result.current.isBottomMostOpenDrawer).toBe(true);
    expect(child.result.current.isBottomMostOpenDrawer).toBe(false);
  });

  it("promotes the remaining drawer when the bottom drawer closes", () => {
    const parent = trackHook(mountDrawerStack({ isOpen: true }));
    const child = trackHook(mountDrawerStack({ isOpen: true }));

    act(() => {
      parent.rerender({ isOpen: false });
    });

    expect(parent.result.current.isBottomMostOpenDrawer).toBe(false);
    expect(child.result.current.isBottomMostOpenDrawer).toBe(true);
  });

  it("removes the drawer from the stack on unmount while open", () => {
    const parent = trackHook(mountDrawerStack({ isOpen: true }));
    const child = trackHook(mountDrawerStack({ isOpen: true }));

    act(() => {
      child.unmount();
      mountedHooks.pop();
    });

    expect(parent.result.current.isBottomMostOpenDrawer).toBe(true);
  });
});
