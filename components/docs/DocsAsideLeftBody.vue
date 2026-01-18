<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");
const route = useRoute();

const filteredNavigation = computed(() => {
  if (!navigation?.value) return [];

  const currentVersion = route.path.split("/")[1]; // 'v1', 'v2', etc.

  // If we are in a versioned path
  if (currentVersion && (currentVersion === "v1" || currentVersion === "v2")) {
    const versionNode = navigation.value.find(
      (item) => item.path === `/${currentVersion}`,
    );
    // Return children of the version node if they exist
    return versionNode?.children || [];
  }

  // Fallback: show everything (or maybe handle other root pages)
  return navigation.value;
});
</script>

<template>
  <UContentNavigation highlight :navigation="filteredNavigation" />
</template>
