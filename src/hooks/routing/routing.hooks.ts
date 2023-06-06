import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback,   useState } from 'react';
import { usePathname } from '../path';
 
export interface NavigateWhenValueChangesOptions<T> {
  from: T;
  to: T;
}

/**
 * 
 * @param path 
 * @param value 
 * @param param2 
 */
export const useNavigateWhenValueChanges = <T>(
  path: string,
  value: T | undefined,
  { from, to }: NavigateWhenValueChangesOptions<T>,
) => {
  const prevRef = useRef<T>();
  const navigate = useNavigate();

  useEffect(() => {
    if (prevRef.current === from && value === to) {
      navigate(path);
    }
    prevRef.current = value;
  }, [value]);
};

 
/**
 * 
 * @returns 
 */
export const useMobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const handlePathnameChange = useCallback(
    (): void => {
      if (open) {
        setOpen(false);
      }
    },
    [open]
  );

  useEffect(
    () => {
      handlePathnameChange();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  );

  const handleOpen = useCallback(
    (): void => {
      setOpen(true);
    },
    []
  );

  const handleClose = useCallback(
    (): void => {
      setOpen(false);
    },
    []
  );

  return {
    handleOpen,
    handleClose,
    open
  };
};
