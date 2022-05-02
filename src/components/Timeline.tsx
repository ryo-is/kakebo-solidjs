import { Component, createSignal, For } from 'solid-js';

type TimelineItem = {
  date: string;
  title: string;
};

export const Timeline: Component = () => {
  const [timelineItems] = createSignal<TimelineItem[]>([
    { date: '2022/05/02 07:00:00', title: '朝ご飯食べた' },
    { date: '2022/05/02 12:00:00', title: '昼食食べた' },
    { date: '2022/05/02 18:00:00', title: '晩ごはん食べた' },
  ]);

  return (
    <div class="flex flex-col items-center justify-center text-md h-full">
      <div>
        <ul class="steps steps-vertical">
          <For each={timelineItems()}>
            {(item) => (
              <li data-content="" class="step">
                <div class="text-left py-4">
                  <div>{item.date}</div>
                  <div class="text-xl">{item.title}</div>
                </div>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
};
