import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { setStickyBar, unsetStickyBar } from "store/ui/actions";
import { ICategory } from "interfaces/category";
import {
  BAR_HEIGHT,
  BAR_GAP,
  CategoriesBarItem,
  WrapperCategoriesBar,
  StyledCategoriesBar,
} from "./styles";
import { NAVBAR_HEIGHT } from "components/app-navbar/styles";

interface CategoriesBarProps {
  categories: ICategory[];
}

export function CategoriesBar({ categories }: CategoriesBarProps) {
  const dispatch = useDispatch();

  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isSticky, setSticky] = useState(false);
  const [barItems, setBarItems] = useState<number[]>([]);
  const [windowScrollY, setWindowScrollY] = useState<number>(0);

  const scrollToAnchor = useCallback((id: string) => {
    const anchor: HTMLElement = document.getElementById("cat-" + id)!;
    const scrollY = anchor?.offsetTop - NAVBAR_HEIGHT - BAR_HEIGHT;
    window.scrollTo({ top: scrollY, behavior: "smooth" });
  }, []);

  // scroll inside bar
  const scrollToCategory = useCallback(
    (index: number) => {
      const countBehind = 1;
      const scrollX = barItems.reduce((acc, item, idx) => {
        if (index - countBehind > idx) {
          return (acc += item);
        }
        return index < 2 ? 0 : acc;
      });

      wrapperRef.current?.scrollTo({
        left: scrollX,
        behavior: "smooth",
      });
    },
    [barItems]
  );

  const checkActiveCategory = useCallback(
    (id: string, index: number) => (): boolean => {
      const element: HTMLElement = document.getElementById("cat-" + id)!;
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          offsetTop <= windowScrollY &&
          offsetHeight + offsetTop > windowScrollY
        ) {
          scrollToCategory(index);
          return true;
        }
      }
      return false;
    },
    [scrollToCategory, windowScrollY]
  );

  const handleActive = useCallback(
    (id: string) => () => {
      scrollToAnchor(id);
    },
    [scrollToAnchor]
  );

  useEffect(() => {
    if (wrapperRef.current) {
      const elements = Array.from(wrapperRef.current.children) as HTMLElement[];
      const map = elements.map((element, idx) =>
        // plus gap for every element except [0]
        idx ? element.offsetWidth + BAR_GAP : element.offsetWidth
      );
      setBarItems(map);
    }
  }, [categories]);

  useEffect(() => {
    isSticky ? dispatch(setStickyBar()) : dispatch(unsetStickyBar());
  }, [dispatch, isSticky]);

  useEffect(() => {
    const handleScroll = () => {
      const windowScrollY = Math.ceil(window.scrollY + NAVBAR_HEIGHT);
      const containerOffsetTop = containerRef.current?.offsetTop!;
      setSticky(windowScrollY >= containerOffsetTop);
      setWindowScrollY(windowScrollY + BAR_HEIGHT);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledCategoriesBar ref={containerRef} isSticky={isSticky}>
      <WrapperCategoriesBar ref={wrapperRef} isSticky={isSticky}>
        {categories.map((category, idx) => (
          <CategoriesBarItem
            key={category.id}
            onClick={handleActive(category.id)}
            isActive={checkActiveCategory(category.id, idx)}
          >
            {category.name}
          </CategoriesBarItem>
        ))}
      </WrapperCategoriesBar>
    </StyledCategoriesBar>
  );
}
