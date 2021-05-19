import { shallowMount } from '@vue/test-utils'
import Badge from '@/components/Badge.vue'


describe("FuelCalculator.vue", () => {
  const wrapper = shallowMount(Badge);

  test("checks X class", () => {
    expect(wrapper.contains('.test')).toBe(true);
});
})