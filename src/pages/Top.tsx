import { Component } from 'solid-js';
import { Timeline } from '@components/Timeline';

export const Top: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center text-md h-full">
      <Timeline />
    </div>
  );
};
