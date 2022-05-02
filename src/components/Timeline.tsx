import { Component, createSignal, For } from 'solid-js';
import dayjs from 'dayjs';
import { Svg } from './Svg';

type TimelineItem = {
  date: string;
  title: string;
};

export const Timeline: Component = () => {
  const [timelineItems] = createSignal<TimelineItem[]>([
    { date: '2022-05-02T07:00:00+09:00', title: '朝ご飯食べた' },
    { date: '2022-05-02T12:00:00+09:00', title: '昼食食べた' },
    { date: '2022-05-02T18:00:00+09:00', title: '晩ごはん食べた' },
  ]);

  return (
    <div>
      <div class="text-xl">2022/05/02</div>
      <ul class="steps steps-vertical">
        <For each={timelineItems()}>
          {(item) => (
            <li data-content="" class="step">
              <div class="text-left py-4 pl-2">
                <div>{dayjs(item.date).format('HH:mm')}</div>
                <div class="text-xl mt-2">{item.title}</div>
              </div>
            </li>
          )}
        </For>
        <li data-content="" class="step">
          <div class="text-left py-4 pl-2">
            <button class="btn btn-primary no-animation">
              <Svg name="plus" />
              <span class="pl-1">追加する</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
