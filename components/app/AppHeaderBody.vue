<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");
const route = useRoute();

const filteredNavigation = computed(() => {
  if (!navigation?.value) return [];

  const currentVersion = route.path.split("/")[1]; // 'v1', 'v2', etc.

  if (currentVersion && (currentVersion === "v1" || currentVersion === "v2")) {
    const versionNode = navigation.value.find(
      (item) => item.path === `/${currentVersion}`,
    );
    return versionNode?.children || [];
  }

  return navigation.value;
});
</script>

<template>
  <UContentNavigation
    highlight
    variant="link"
    :navigation="filteredNavigation"
  />
</template>
