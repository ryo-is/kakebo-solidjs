import { Component } from 'solid-js';
import { Svg } from './Svg';

export const Navbar: Component = () => {
  return (
    <div class="navbar fixed">
      <div class="pl-3 flex-1">MyTimeline</div>
      <div class="flex-none">
        <button class="btn bg-zinc-800 hover:bg-zinc-900 no-animation border-0">
          <Svg name="cov" />
        </button>
      </div>
    </div>
  );
};
