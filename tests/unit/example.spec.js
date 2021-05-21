import { mount } from '@vue/test-utils';
// import Badge from '@/components/Badge.vue';
import TaskCard from '@/components/TaskCard.vue';

// describe('Badge.vue', () => {
//   const wrapper = mount(Badge);

//   test('checks for certain class', () => {
//     expect(wrapper.contains('.rounded-full')).toBe(true);
//   });
// });

// describe('TaskCard.vue', () => {
//   it('should set correct classes for task', async () => {
//     const tCwrapper = {
//       template: '<div>{{ task.color }}</div>',
//       props: ['task.color'],
//     };
//     const wrapper = mount(TaskCard, {
//       propsData: {
//         msg: 'purple',
//       },
//     });
//     expect(wrapper.text()).toBe('purple');
//   });
// });

// const TaskCard2 = {
//   template: '<div>{{ color }}</div>',
//   props: ['color']
// }

describe('TaskCard.vue', () => {
  it('should set correct class for task', async () => {
    const wrapper = mount(TaskCard, {
      propsData: {
        task: {
          color: 'RED',
        },
      },
    });
    // const color = 'GRAY';
    // await wrapper.setProps({ task: { color } });

    const divs = wrapper.findAll('div');
    const div = divs.at(0);

    expect(div.classes()).toContain(`border-red-400`);
  });
});

// describe('TaskCard.vue', () => {

//   it('should set correct classes for task', async () => {

//     // set custom task object to propsData

//     // check if wrapper has correct color class (for example purple task has to have border-purple-400 class)

//   })
