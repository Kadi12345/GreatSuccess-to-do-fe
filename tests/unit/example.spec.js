import { shallowMount } from '@vue/test-utils';
import Badge from '@/components/Badge.vue';

describe('Badge.vue', () => {
  const wrapper = shallowMount(Badge);

  test('checks for certain class', () => {
    expect(wrapper.contains('.rounded-full')).toBe(true);
  });
});
