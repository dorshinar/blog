"use client";

import { Checkbox } from "@/components/checkbox";
import { CodeSnippetWrapper } from "@/components/code-snippet-wrapper";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import React, { useCallback, useState } from "react";

interface Props {
  items: number;
  ListComponent: React.FunctionComponent<{
    list: number[];
    loadMore(): void;
    loading: boolean;
    hookVersion: 1 | 2;
  }>;
  hookVersion: 1 | 2;
  initialSimulateLatency?: boolean;
}

const ListContainer = ({
  items,
  ListComponent,
  hookVersion,
  initialSimulateLatency = false,
}: Props) => {
  const [list, setList] = useState([...Array(items).keys()]);
  const [loading, setLoading] = useState(false);
  const [simulateLatency, setSimulateLatency] = useState(
    initialSimulateLatency
  );

  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion
    ? { opacity: 0 }
    : { scale: 0.8, opacity: 0 };
  const animate = prefersReducedMotion
    ? { opacity: 1 }
    : { scale: 1, opacity: 1 };

  const loadMore = useCallback(() => {
    if (!simulateLatency) {
      return setList(
        list.concat([...Array(items).keys()].map((item) => item + list.length))
      );
    }

    setLoading(true);
    setTimeout(() => {
      setList(
        list.concat([...Array(items).keys()].map((item) => item + list.length))
      );
      setLoading(false);
    }, 2000);
  }, [items, list, simulateLatency]);

  return (
    <div className="flex flex-col gap-2">
      <CodeSnippetWrapper className="flex justify-between p-4">
        <ListComponent
          list={list}
          loadMore={loadMore}
          loading={loading}
          hookVersion={hookVersion}
        />
        {hookVersion && (
          <div className="sticky top-0 ml-auto">
            <AnimatePresence>
              {loading && (
                <motion.div
                  className="w-32 h-12 bg-emerald-500 grid place-items-center rounded"
                  initial={initial}
                  animate={animate}
                  exit={initial}
                >
                  Loading...
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </CodeSnippetWrapper>
      <Checkbox
        checked={simulateLatency}
        onCheckedChange={(checked) => setSimulateLatency(Boolean(checked))}
        aria-label="Simulate network latency"
      ></Checkbox>
    </div>
  );
};

export default ListContainer;
