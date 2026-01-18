<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const version = computed(() => {
  if (route.path.startsWith("/v1")) return "v1.x";
  if (route.path.startsWith("/v2")) return "v2.x";
  return "v2.x";
});

const items = [
  [
    {
      label: "v2.x",
      to: "/v2",
    },
  ],
  [
    {
      label: "v1.x",
      to: "/v1",
    },
  ],
];
</script>

<template>
  <UDropdownMenu :items="items" :content="{ placement: 'bottom-end' }">
    <UButton
      color="neutral"
      variant="ghost"
      trailing-icon="i-heroicons-chevron-down-20-solid"
      :label="version"
    />
  </UDropdownMenu>
</template>
